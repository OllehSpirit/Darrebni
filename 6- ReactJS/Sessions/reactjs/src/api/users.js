import axios from 'axios'


export const getUsers = async () => {
    try {
        return await axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.data;
        })
    }
    catch (error) {
        console.log('Error in GET users', error)
    }
}


export const getUser = async (userId) => {
    try {
        return await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => {
            return response.data;
        })
    }
    catch (error) {
        console.log('Error in GET posts', error)
    }
}


// Fetch
// export const getUsers = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         return await response.json()
//     }
//     catch (error) {
//         console.log('Error in GET users', error)
//     }
// }

// export const getUser = async (userId) => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         return await response.json()
//     }
//     catch (error) {
//         console.log('Error in GET posts', error)
//     }
// }