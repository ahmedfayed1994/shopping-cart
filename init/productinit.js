const Product = require('../models/Product');

const mongoose = require('mongoose');
const {disconnect} = require("mongoose");

mongoose.connect('mongodb://localhost/shopping-cart', {useNewUrlParser : true},(error) => {
    if (error){
        console.log(error)
    }else {
        console.log('Connecting to DB .......')
    }
});

const products =[
    new Product({
        imgPath: '/images/1.jpg',
        productName: 'Laptop',
        price: '200',
        information: {
            brand : 'Dell',
            series : 'ROSTOV 3510 i7 16G 1T 256SSD',
            screenSize : '15.6',
            colour : 'Black',
            hardDiskSize : '1 TB',
        }
    }),

    new Product({
        imgPath: '/images/2.jpg',
        productName: 'Mobil',
        price: '100',
        information: {
            brand : 'Samsung',
            series : 'Bluetooth, Wi-Fi, USB, NFC',
            screenSize : '6.6 Inches',
            colour : 'Light Blue',
            hardDiskSize : '1 TB',
        }
    }),

    new Product({
        imgPath: '/images/3.jpg',
        productName: 'Laptop',
        price: '120',
        information: {
            brand : 'Toshiba',
            series : 'ROSTOV 3510 i7 16G 1T 256SSD',
            screenSize : '17.6',
            colour : 'Black',
            hardDiskSize : '2 TB',
        }

    }),

    new Product({
        imgPath: '/images/4.jpg',
        productName: 'Laptop',
        price: '200',
        information: {
            brand : 'Dell',
            series : 'ROSTOV 3510 i7 16G 1T 256SSD',
            screenSize : '15.6',
            colour : 'Black',
            hardDiskSize : '1 TB',
        }

    }),

    new Product({
        imgPath: '/images/5.jpg',
        productName: 'Laptop',
        price: '200',
        information: {
            brand : 'Dell',
            series : 'ROSTOV 3510 i7 16G 1T 256SSD',
            screenSize : '15.6',
            colour : 'Black',
            hardDiskSize : '1 TB',
        }

    }),

    new Product({
        imgPath: '/images/6.jpg',
        productName: 'Laptop',
        price: '200',
        information: {
            brand : 'Dell',
            series : 'ROSTOV 3510 i7 16G 1T 256SSD',
            screenSize : '15.6',
            colour : 'Black',
            hardDiskSize : '1 TB',
        }

    }),
];

var done = 0;
for (var i = 0 ; i < products.length; i++){
    products[i].save((error, doc) => {
        if (error){
            console.log(error)
        }
        console.log(doc)
        done ++;
        if (done === products.length){
            mongoose.disconnect();
        }
    });
}