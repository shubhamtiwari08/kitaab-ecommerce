
const initialState = {
    cart:[],
    error:null,
    loading:false
}


export const cartReducer= (state=initialState,action) =>{
   switch(action.type){
    case"FETCH_CART":
    return{
        ...state,
        cart:[...action.payload.cart[0].items],
        error:null
    }
    case "FETCH_CART_ERROR":
        return{
            ...state,
            error:"could not fetch cart"
        }
    case"ADD_TO_CART":
    return {
        ...state,
        cart:[...action.payload.cart.items]
    }
    case"REMOVE_FROM_CART":
    return{
        ...state,
        cart:[...action.payload.cart[0].items],
        error:null
    }
    case"ADD_TO_CART_ERROR":
    return {
        ...state,
        error:"could not add product"
    }
    case"RESET_CART":
    return{
        ...state,
        cart:[],
        error:null,
        loading:false
    }
    default:
        return state
   }
}