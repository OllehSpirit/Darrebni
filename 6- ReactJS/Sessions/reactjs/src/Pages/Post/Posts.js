import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletePost, getPosts } from '../../api/posts'

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            setPosts(await getPosts())
        })()

    }, [])

    const deletePostId = (postId) => {
        deletePost(postId)
    }

    return (
        <>
            <div className='d-flex justify-content-end'>
                <Link to={'/add-post'} className='m-5 mb-0 p-3 rounded' style={{ color: 'white', backgroundColor: 'var(--primary)', textDecoration: 'none' }}>Add Post</Link>
            </div>
            <div className='d-flex flex-wrap justify-content-center gap-5 p-5 '>
                {posts.map(post => {

                    return <div key={post.id} className='d-flex flex-column justify-content-between align-items-center p-3 card' style={{ width: '30%' }}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <div className='d-flex align-items-center gap-5'>
                            <div className='p-2 rounded' style={{ color: 'white', backgroundColor: 'var(--primary)', cursor: 'pointer' }} onClick={() => { deletePostId(post.id) }}>Delete</div>
                            <Link to={`/update-post/${post.id}`} className='p-2 rounded' style={{ color: 'white', backgroundColor: '#aaa', textDecoration: 'none' }}>Update Post</Link>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}
