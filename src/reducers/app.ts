import { Action, ActionType, ReducerState } from "../types/reducers";

const initialState = {
    breed: 'All',
    subBreed: 'All',
    number: '1',
    imageResults: 0,
    error: false
}

const app = (state = initialState, action: Action): ReducerState => {
    switch (action.type) {
        case ActionType.BREED:
            return Object.assign({}, state, {
                breed: action.payload
            })
        default: return state;
    }
};

export default app;