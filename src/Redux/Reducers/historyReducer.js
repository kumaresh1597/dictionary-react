import { ADD_HISTORY } from "../Actions/actionType";

const history = []

function historyReducer(state = history,actions){
    switch(actions.type){
        case ADD_HISTORY : return [...state,actions.payload]
        default : return state
    }
}

export default historyReducer;