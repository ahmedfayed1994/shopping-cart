const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    imgPath : {
        type : String,
        require : true
    },

    productName : {
        type : String,
        require: true
    },

    price : {
        type : Number,
        require : true
    },

    information : {
        require : true,
        type : {
            brand : String,
            series : String,
            screenSize : String,
            colour : String,
            hardDiskSize : String,
        }
    }
});

module.exports = mongoose.model('Product', ProductSchema);