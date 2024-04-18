/** @type{import('fastify').FastifyPluginAsync<>} */
export default async function auth(app, options) {
    
    app.post('/auth', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    name: { type: 'string' },
                    password: {type: 'string'}
                },
                required: ['name', 'password']
            }
        }
    },(req, rep) => {
        let user = req.body;
        req.log.info(`Login for user ${user.username}`);
        //check login details
        delete user.password;
        return {
            'x-access-token': app.jwt.sign(user)
        }
    });
}