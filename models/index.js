const { noBoolOperatorAliases } = require('sequelize/lib/utils/deprecations');
const dbConfig = require('../config/dbConfig.js');

const {Sequelize, Datatypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        OperatorAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Erorr'+ err)
})

const db = {}

db.Sequelize = sequelize
db.Sequelize = Sequelize

db.product = require('./productModel.js')(sequelize, Datatypes)
db.reviews = require('./reviewModel.js')(sequelize, Datatypes)

db.sequelize.sync({force: false })
.then(() => {
    console.log('yes re-sync done !')
})


module.exports = db
