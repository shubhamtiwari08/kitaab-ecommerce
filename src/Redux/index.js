import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { wishlistReducer } from "./WishlistReducer";
import { productReducer } from "./ProductReducer";
import { authReducer } from "./authReducer";



const allReducers = combineReducers(
    {
        cartReducer,
        wishlistReducer,
        productReducer,
        authReducer
    }
)

export default allReducers