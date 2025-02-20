import { types } from "../types/types";

const initialState = {
    input: '',
    completed: '',
    tasks: []
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Date.now(),
                        title: action.payload.title,
                        description: action.payload.description,
                        completed: false
                    }
                ]
            };

        case types.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };

        case types.EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? { ...task, title: action.payload.title, description: action.payload.description }
                        : task
                )
            };

        case types.TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            };

        default:
            return state;
    }

}