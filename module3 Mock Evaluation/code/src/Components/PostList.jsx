import React, { useContext } from 'react'
import { PostContext } from '../Context/PostsContext'

const PostList = () => {
    const {posts}= useContext(PostContext);
  return (
    <div className='posts'>
    {posts.map(post=>(
        <PostCard key={post.id} post={post}/>
    ))}
    </div>
  )
}

export default PostList