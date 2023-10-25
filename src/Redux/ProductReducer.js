
const initialState = {
    products:[],
    error:null,
    loading:false
}


export const productReducer=(state=initialState,action)=>{
   switch(action.type){
    case "FETCH_PRODUCTS_LOADING":
    return {
        ...state,
        loading:true
    }
    case"FETCH_PRODUCTS_SUCCESS":
    const productAll = action.payload
    return {
        ...state,
        products:[...productAll],
        error:null,
        loading:false
    }
    case "FETCH_PRODUCT_FAILURE":
    return{
        ...state,
        error:"could not load products",
        loading:false
    }
    default:
        return state
   }
}