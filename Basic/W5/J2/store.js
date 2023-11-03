const { Product } = require("./OOP.js");

products = {};

function addProduct(product, count) {
  products[product.id] = {
    product,
    count,
  };
}

addProduct(new Product("boshghb"), 12);
addProduct(new Product("livan"), 3);

console.log(products);
