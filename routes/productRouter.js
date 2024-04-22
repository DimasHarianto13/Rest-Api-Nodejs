const productController = require('../controllers/productControllers.js')

const router = require('express').Router()

router.post('/addProduct', productController.addProduct)

router.get('/allProduct', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)



router.get('/:id', productController.getOneProduct)

router.post('/:id', productController.updateProduct)

router.post('/addProduct', productController.deleteProduct)