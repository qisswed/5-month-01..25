import {types} from "../types/types";

const initialState = {
    title: 'Frunze',
    value: 'sdsds',
    name: 'vvvv',
}


export default function mainReducer(state = initialState,action) {
    if(action.type === types.CHANGE_TITLE) {
        return {...state, title: 'Bishkek'}
    }
    return state
}