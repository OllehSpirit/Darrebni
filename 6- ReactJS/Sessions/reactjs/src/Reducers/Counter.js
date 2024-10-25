// install REDUX
// npm i redux react-redux
// npm i redux-devtools
// npm install @reduxjs/toolkit

export default function Counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'MULTIPLY':
            return state * 2;
        default:
            return state;
    }
}