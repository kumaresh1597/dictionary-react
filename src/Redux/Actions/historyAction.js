import { ADD_HISTORY } from "./actionType";

export const addHistory = (word)=>{
    return {
        type : ADD_HISTORY,
        payload : word
    }
}