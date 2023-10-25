
export const signUp=async(dispatch,data)=>{
    try {
        const res = await fetch('https://e-commerce.shubhamtiwari39.repl.co/auth/signup',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)

        })

        const user = await res.json()
        dispatch({type:"SIGN_UP"})

    } catch (error) {
        dispatch({type:"SIGN_UP_ERROR"})
    }
}


export const logIn=async(dispatch,data)=>{
    try {
        const res = await fetch('https://e-commerce.shubhamtiwari39.repl.co/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)

        })

        const user = await res.json()
        dispatch({type:"LOG_IN",payload:user})
    } catch (error) {
        dispatch({type:"LOG_IN_ERROR"})
    }
}


export const fetchProducts = async(dispatch)=>{
    try {
        dispatch({type:"FETCH_PRODUCTS_LOADING"})
        const res = await fetch('https://e-commerce.shubhamtiwari39.repl.co/products')
        const products = await res.json()
        console.log(products)
        dispatch({type:"FETCH_PRODUCTS_SUCCESS",payload:products.products})
    } catch (error) {
        dispatch({type:"FETCH_PRODUCTS_FAILURE"})
    }
}

export const fetchCart = async(dispatch,userId)=>{
    try {
        const res = await fetch(`https://e-commerce.shubhamtiwari39.repl.co/cart/${userId}`)
        const cart = await res.json()
        dispatch({type:"FETCH_CART",payload:cart})
    } catch (error) {
        dispatch({type:"FETCH_CART_FAILURE"})
    }
}

export const addToCart=async(dispatch,userId,productId,data)=>{
    try {
        const res = await fetch(`https://e-commerce.shubhamtiwari39.repl.co/cart/${userId}/${productId}`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)

        })

        const updatedCart = await res.json()
        dispatch({type:"ADD_TO_CART",payload:updatedCart})
    } catch (error) {
        dispatch({type:"ADD_TO_CART_ERROR"})
    }
}


export const addToWishlist=async(dispatch,userId,productId,data)=>{
    try {
        const res = await fetch(`https://e-commerce.shubhamtiwari39.repl.co/wishlist/${userId}/${productId}`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)

        })

        const updatedWishlist= await res.json()
        dispatch({type:"ADD_TO_WISHLIST",payload:updatedWishlist})
    } catch (error) {
        dispatch({type:"ADD_TO_WISHLIST_ERROR"})
    }
}

export const removeFromCart=async(dispatch,userId,productId)=>{
    try {
        const res = await fetch(`https://e-commerce.shubhamtiwari39.repl.co/cart/${userId}/${productId}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

        })

        const updatedCart = await res.json()
        dispatch({type:"FETCH_CART",payload:updatedCart})
    } catch (error) {
        dispatch({type:"FETCH_CART_ERROR"})
    }
}


export const removeFromWishlist=async(dispatch,userId,productId)=>{
    try {
        const res = await fetch(`https://e-commerce.shubhamtiwari39.repl.co/wishlist/${userId}/${productId}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

        })

        const updatedWishlist = await res.json()
        dispatch({type:"FETCH_WISHLIST",payload:updatedWishlist})
    } catch (error) {
        dispatch({type:"FETCH_WISHLIST_ERROR"})
    }
}
