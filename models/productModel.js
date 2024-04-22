module.exports = (sequelize, Datatypes) => {
    
    const product = sequelize.define("Product", {
        title: {
            type: Datatypes.STRING,
            allowNull: false 
        },
        price: {
            type: Datatypes.INTEGER
        },
        descripsion: {
            type: Datatypes.TEXT
        },
        published: {
            type: Datatypes.BOOLEAN
        }

    })
   
   return product

}