import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";



const store = configureStore({
     reducer:{
        cart:CartSlice,
        // name of thee slice is putted here;
        // we can put multiple slices in the one object
     },
});

export default  store;