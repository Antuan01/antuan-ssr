import Product from "../models/product";

export const add = () => {};

export const get = () => {};

export async function index() {

return  await Product.find(function (err, products) {
  if (err) return console.error(err);
  console.log(products)
    });
};
