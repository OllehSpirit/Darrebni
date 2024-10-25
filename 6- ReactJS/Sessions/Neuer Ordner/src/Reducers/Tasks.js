const tasks = [];

export default function Tasks(state = tasks, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { ...action.payload }];

        case 'DELETE_TASK':
            return state.filter((_el, index) => {
                return index !== action.payload.id
            })

        case 'UPDATE_TASK':
            return state.map((task, index) => {
                if (index === action.payload.id) {
                    return {
                        name: action.payload.name,
                        userId: action.payload.userId,
                        date: action.payload.date,
                    }
                }
                else return task
            })

        default:
            return state;
    }
}
