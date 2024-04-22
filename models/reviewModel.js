module.exports = (sequelize, Datatypes) => {
    
    const review = sequelize.define("review", {
        
        rating: {
            type: Datatypes.INTEGER
        },
        descripsion: {
            type: Datatypes.TEXT
        },
       

    })
   
   return review
    
}