// reducers 

const initialState = {
    carts: []
}


export const cartReducer = (state = initialState, action) =>{
    
    console.log("reducer file ->", action.payload)
    
    switch(action.type){
        
        case 'ADD_TO_CART':
            console.log("reducer logical part ",action.payload)

            let itemIndex = state.carts.findIndex(x => x.id === action.payload.id)
            if(itemIndex>=0){
                state.carts[itemIndex].qty += 1;
                return{
                    ...state,
                    carts:[...state.carts]
                }
            }else{
                let defValue = {...action.payload, qty: 1}
                return{
                    ...state,
                    carts:[...state.carts, defValue]
                }
            }

        case 'DELETE_PRODUCT':
            let data = state.carts.filter(x => x.id !== action.payload)
            return{
                ...state,
                carts: data
            }


        default: 
            return initialState;
    }
}


// export const authReducer = (state = initialState, action) =>{
    
// }



// export const authReducer = () =>{

// }


    // if(action.type == 'ADD_TO_CART'){
    //     return initialState + 1
    // }else if(action.type == 'REMOVE_TO_CART'){
    //     return initialState - 1
    // }else{
    //     return state
    // }