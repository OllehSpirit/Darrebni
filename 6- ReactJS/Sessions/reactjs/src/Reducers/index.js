import { combineReducers } from 'redux'
import Counter from './Counter'
import Tasks from './Tasks'
import Users from './Users'
import Posts from './Posts'

export const allReducers = combineReducers({
    Counter: Counter,
    Tasks:Tasks,
    Users:Users,
    Posts:Posts
})