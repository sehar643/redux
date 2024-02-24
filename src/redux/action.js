
// actions

export const addCart = (item) =>{

    console.log("Add to cart action called")
    
    return{
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const delItem = (id) =>{
    console.log("deleting item")
    return{
        type: 'DELETE_PRODUCT',
        payload: id
    }
}
export const rmvCart = (item) =>{
    console.log("Remove to cart action called")

    return{
        type: 'REMOVE_TO_CART',
        payload: item
    }
}

// const addCart = (item) =>{
//     return{
//         type: 'ADD_TO_CART',
//         data: item
//     }
// }