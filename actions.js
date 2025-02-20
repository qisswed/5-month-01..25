import { types } from "../types/types";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    };
}

export function withParamsAction(title) {
    return {
        type: types.WITH_PARAMS,
        payload: title
    };
}

export function addUserAction(input) {
    return {
        type: types.FROM_INPUT,
        payload: input
    };
}

export function AddTasksAction(title, description, completed) {
    return {
        type: types.ADD_TASK,
        payload: { title, description, completed }
    };
}

export function DeleteTaskAction(id) {
    return {
        type: types.DELETE_TASK,
        payload: id
    };
}

export function EditTaskAction(id, title, description) {
    return {
        type: types.EDIT_TASK,
        payload: { id, title, description }
    };
}

export function ToggleTaskAction(id) {
    return {
        type: types.TOGGLE_TASK,
        payload: id
    };
}



