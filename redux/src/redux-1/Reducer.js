const initialState = {
    CounterValue : 0,
};

export const Reducer = (state = initialState, action)=>{
   const { data } = action;
   switch (action.type){
    case "ADD":
        return Object.assign(
          {},
          {
            ...state,
            CounterValue: state.CounterValue + data,
          }
        );

     case "SUB":
        return Object.assign(
            {},
            {...state,
                CounterValue : state.CounterValue - data,

            }
        );
  
    default:
    return state;

   }
};
