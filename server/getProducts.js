const products = require("../products.json")

const getProducts = (req, res , next) => {
    if(req.query.price){
        const filteredProducts = products.filter( prod => prod.price >= parseInt(req.query.price))
        return res.status(200).json(filteredProducts)
    }
    res.status(200).json(products)
}



module.exports = getProducts;
