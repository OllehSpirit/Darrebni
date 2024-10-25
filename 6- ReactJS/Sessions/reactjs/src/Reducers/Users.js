const users = [];

export default function Users(state = users, action) {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, { ...action.payload }];

        case 'DELETE_USER':
            return state.filter((_el, index) => {
                return index !== action.payload.id
            })

        case 'UPDATE_USER':
            return state.map((user, index) => {
                if (index === action.payload.id) {
                    return {
                        fName: action.payload.fName,
                        lName: action.payload.lName,
                        email: action.payload.email,
                        password: action.payload.password,
                        phone: action.payload.phone,
                        country: action.payload.country,
                        city: action.payload.city,
                        gender:user.gender
                    }
                }
                else return user
            })

        default:
            return state;
    }
}
