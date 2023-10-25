const initialState = {
    wishlist:[]
}


export const wishlistReducer=(state=initialState,action)=>{
   switch(action.type){
    case"ADD_TO_WISHLIST":
    return {
        ...state,
        wishlist:[action.payload]
    }
    case "FETCH_WISHLIST_ERROR":
        return{
            ...state,
            error:"could not fetch wishlist"
        }
    case"ADD_TO_WISHLIST_ERROR":
    return {
        ...state,
        error:"could not add product"
    }
    
    default:
        return state
   }
}

