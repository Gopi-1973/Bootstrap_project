const initialData = {
    cart : 0
}

const store = (state=initialData,action)=>{

    switch (action.type){
        case 'ADD':
            // alert('state changed')
            return {
                cart: ++state.cart
            }

            case 'REMOVE':
                return {
                    cart: --state.cart
                }

                default :
                return state
                
            }

}


export default store