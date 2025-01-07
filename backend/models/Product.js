const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    OrderId:String,
    name:String,
    Rating:Number,
    NoOfRating:Number,
    Price:Number,
    Discount:String,
    OfferPrice:Number,
    ProdDescription:String,
    HeadImg:String,
    Img1:String,
    Img2:String,
    Img3:String,
    Img4:String
});

const Product = mongoose.model('Product',ProductSchema);
const addProducts = async () => {
    try {
        const products = await Product.create([
            {
                OrderId:"p28cs2", 
                name:"SOFA",
                Rating: 4,
                NoOfRating:421,
                Price:4000,
                Discount:"40%",
                OfferPrice:2400,
                ProdDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac laoreet bibendum, metus felis euismod dolor, ac varius nunc purus sit amet nunc. euismod dolor, ac varius nunc purus sit amet nunc.",
                HeadImg:"/uploads/sofa_img1.jpg",
                Img1:"/uploads/sofa_img2.jpeg",
                Img2:"/uploads/sofa_img3.jpg",
                Img3:"/uploads/sofa_img2.jpeg",
                Img4:"/uploads/sofa_img4.jpg",
        
            }
        ]);
    } catch (error) {
        console.error("Error adding products:", error);
    }

};
// addProducts();

module.exports=Product;