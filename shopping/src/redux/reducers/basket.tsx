const basketReducer = (state = [], action: any) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return [...state, action.payload];
        case "REMOVE_FROM_BASKET":
            return [...state.splice(action.payload,1)];
        default:
            return [...state];
    }
}
export type BasketState = ReturnType<typeof basketReducer>
export default basketReducer;