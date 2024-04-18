import fastify from 'fastify';
import createError from '@fastify/error';
import autoload from '@fastify/autoload';
import jwt from '@fastify/jwt';
import mongodb  from '@fastify/mongodb';
import {fileURLToPath} from 'url';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const options = { 
    stage: process.env.STAGE,
    port: process.env.PORT,
    host: process.env.HOST,
    logger: process.env.STAGE === 'dev' ? {transport : {target: 'pino-pretty'}} : false,
    jwt_secret: process.env.JWT_SECRET,
    db_url: process.env.DB_URL
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MyCustomError = createError('MyCustomError', 'Something stranged happened.', 501);

export async function build(opts){
    const app = fastify(opts);

    await app.register(jwt, {
        secret: opts.jwt_secret
    });

    await app.register(mongodb, {
        url: opts.db_url
    });

    await app.register(autoload, {
        dir: path.join(__dirname, 'hooks'),
        encapsulate: false,
        ignoreFilter: (path) => {
            return path.includes('functions');
        }
    });

    await app.register(autoload, {
        dir: path.join(__dirname, 'routes')
    });


    app.get('/error', (req, rep) => {
        throw new MyCustomError();
    });
 

    app.setErrorHandler(async (error, req, rep) => {
        const  { validation } = error;
        req.log.error({ error });
        rep.code(error.statusCode || 500);

        
        return validation ? `Validation Error: ${validation[0].message}.` : 'Internal Server Error';
    });

    app.get('/notfound', async (req, rep) => {
        req.log.info('Sending to not found handler.');
        rep.callNotFound();
    });

    app.setNotFoundHandler(async (req, rep) => {
        rep.code(404);
        return 'Resource not found.';
    });

    return app;
}