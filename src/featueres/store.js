import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import uiSlice from "./common/uiSlice";
import postSlice from "./post/postSlice";
import chatSlice from "./chat/chatSlice"
// import productSlice from "./product/productSlice";
// import cartSlice from "./cart/cartSlice";
// import orderSlice from "./order/orderSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    // cart: cartSlice,
    ui: uiSlice,
    // order: orderSlice,
    chat: chatSlice
  },
}); 
export default store;