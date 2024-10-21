import userModel from "../models/userModel.js";

//add items to usercart

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add to cart" });
  }
};

//remove items from userCart

const removeFromCart = async (req, res) => {
  try{
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if(cartData[req.body.itemId]>0){
      cartData[req.body.itemId] -=1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true, message:"remove from cart"})

  }catch(error){
    console.log(error);
    res.json({success:false, message:"failed to remove Item"})
    
  }
};

//fetch UserCart data

const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({success:true, cartData})
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
  }
};

export { addToCart, removeFromCart, getCart };