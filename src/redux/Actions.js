import counterReducer from "./reducers/counterReducer";

export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const reset = () => {
    return {
        type: 'REST',
    }
};

