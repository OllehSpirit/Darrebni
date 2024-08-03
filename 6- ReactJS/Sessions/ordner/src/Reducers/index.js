import { combineReducers } from 'redux'
import Counter from './Counter'
import Tasks from './Tasks'

export const allReducers = combineReducers({
    Counter: Counter,
    Tasks:Tasks
})