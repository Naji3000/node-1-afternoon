const express = require ("express")
const app = express()
// const products = require("../products.json")
const getProducts = require("./getProducts")
const getProduct = require("./getProduct")




app.get("/api/products" , getProducts);

app.get("/api/product/:id" , getProduct);








app.listen(5050 , () => {
    console.log("Port Listening")
})