const db = require('../modules')

// create main model
const Product = db.product
const review = db.review

// main work

// 1. create product

const addProduct = async (req, res) => {

    let info ={
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)

}


// 2. get all products 

const getAllProducts = async (req, res) => {

    let product = await Product.findAll({
        attributes: [
            'title',
            'price'
        ]
    })
    res.status(200).send(product)

}

// 3. get single products 

const getOneProduct = async (req, res) => {

    let id = req.pamams.id
    let product = await product.findOne({where : {id: id }})
    res.status(200).send(product)
    
}

// 4. update Product 

const updateProduct = async (req, res) => {
    
    let id = req.pamams.id

    const product = await product.update(req.body, {where : {id: id }})

    res.status(200).send(product)
    
}

// 5. delete product by id

const deleteProduct = async (req, res) => {
    
    let id = req.pamams.id

     await product.destroy({where : {id: id }})

    res.status(200).send('product is deleted')
    
}

// 6. delete product by id

const getPublishedProduct = async (req, res) => {
    

    const products = await product.findAll({where : {published: true }})

    res.status(200).send('product is deleted')
    
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,

}