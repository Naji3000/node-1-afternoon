const products = require("../products.json")


const getProduct = (req, res, next) => {

    const prod = products.find( prod => prod.id === parseInt(req.params.id));
    if(!prod) {
        return res.status(500).json("Item not in list")
    } 
        res.status(200).json(prod)

    }


module.exports = getProduct;