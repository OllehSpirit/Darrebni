import { ADD_POST, ADD_TASK, ADD_USER, DELETE_TASK, DELETE_USER, UPDATE_TASK, UPDATE_USER, } from './actionTypes';


// Actions for users
export const addUser = (user) => {
    return {
    type: ADD_USER,
    payload: user,
}
};

export const deleteUser = (userId) => ({
    type: DELETE_USER,
    payload: userId,
});

export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user,
});



// Actions for tasks
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
});

export const updateTask = (task) => ({
    type: UPDATE_TASK,
    payload: task,
});



// Actions for posts
export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
});