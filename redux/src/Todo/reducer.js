const initialState = {
    inputValue : "",
    addInputValue : [],
};


export const reducer = (state = initialState, action)=>{
    const { payload } = action;
    switch(action.type){

        case "SET":
            return Object.assign(
                {},{
                    ...state,
                    inputValue : payload,
                    
                }
            )
        case "ADD":
            return Object.assign(
                {},{
                    ...state,
                    addInputValue : [state.inputValue]
                    
                }
            )

        default:
        return state;
    }
}