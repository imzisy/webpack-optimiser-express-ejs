import {update} from "../lib/calculation"
let init ;
const mathReducer = (state, action) => {
    init = state;
    switch (action.type) {
        case "INIT":
        return update(state.rates,state.amount,state.islamic,state.tenure);
        break;

        case "SET_AMOUNT":
        return update(state.rates,action.payload.amount,state.islamic,state.tenure);
        break;

        case "SET_ISLAMIC":
        let rates = window.__PRELOADED_STATE__.rates
        return update(rates,state.amount,action.payload.islamic,state.tenure);
        break;
       
        case "SET_TENURE":  
        return update(state.rates,state.amount,state.islamic,action.payload.tenure);
        break;
        default: return state;
    }
    return state;
};
export default mathReducer;