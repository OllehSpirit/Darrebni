import axios from 'axios'

export const postPost = async (title, body, userId) => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                title: title,
                body: body,
                userId: userId
            },
            {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        )
    }
    catch (e) {
        console.log('Error in POST post ', e)
    }
}

export const getPosts = async () => {
    try {
        return await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            return response.data;
        })

    }
    catch (error) {
        console.log('Error in GET posts', error)
    }
}

export const getPost = async (postId) => {
    try {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => {
            return response.data;
        })
    }
    catch (error) {
        console.log('Error in GET post', error)
    }
}


export const deletePost = async (postId) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
    catch (error) {
        console.log('Error DELETE post')
    }
}


export const putPost = async (postId, title, body, userId) => {
    try {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                id: postId,
                title: title,
                body: body,
                userId: userId,
            },
            {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }
        )

    }
    catch (error) {
        console.log('Error PUT post')
    }
}







// Fetch

// export const postPost = async (title, body, userId) => {
//     try {
//         await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: title,
//                 body: body,
//                 userId: userId
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json));
//     }
//     catch (e) {
//         console.log('Error in POST post ', e)
//     }
// }


// export const getPosts = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         return await response.json()
//     }
//     catch (error) {
//         console.log('Error in GET posts', error)
//     }
// }

// export const getPost = async (postId) => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         return await response.json()
//     }
//     catch (error) {
//         console.log('Error in GET post', error)
//     }
// }


// export const deletePost = async (postId) => {
//     try {
//         await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//             method: 'DELETE',
//         });
//     }
//     catch (error) {
//         console.log('Error DELETE post')
//     }
// }


// export const putPost = async (postId, title, body, userId) => {
//     try {
//         await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//             method: 'PUT',
//             body: JSON.stringify({
//                 id: postId,
//                 title: title,
//                 body: body,
//                 userId: userId,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json));

//     }
//     catch (error) {
//         console.log('Error PUT post')
//     }
// }