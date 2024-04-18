import { ALREADY_EXISTS, AUTH_INVALID_TOKEN, AUTH_NO_TOKEN } from "../../../libs/error.js"

export const checkExistence = (app) => async(req, rep) => {
    const products = app.mongo.db.collection('products');

    let product =  req.body;

    let result = await products.count({name: product.name});

    if(result > 0) throw new ALREADY_EXISTS();
}