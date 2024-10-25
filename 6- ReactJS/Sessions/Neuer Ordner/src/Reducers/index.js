import { combineReducers } from 'redux'
import Counter from './Counter'
import Tasks from './Tasks'
import Users from './Users'

export const allReducers = combineReducers({
    Counter: Counter,
    Tasks:Tasks,
    Users:Users,
})