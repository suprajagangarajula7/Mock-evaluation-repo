import React, { useContext, useState } from 'react'
import { PostContext } from '../Context/PostsContext'

export const PostCard = ({post}) => {
    const{updatePost, deletePost}=useContext(PostContext);
    const [edit, setEdit]=useState(false);
    con[title, setTitle]= useState(post.title);
    const [body, setBody]= useState(post.body);
    const handleSave=()=>{
        updatePost(post.id, {title,body});
        setEdit(false)
    };
  return (
    <div className='card'>
        {edit ? (
            <>
            <input value={title} onChange={e=> setTitle(e.target.value)}/>
            <textarea value={body} onChange={e=> setBody(e.target.value)}/>
                <button onClick={handleSave}>Save</button>
                </>
        ) : (
            <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </>
        )
        }

        <button onClick={()=>setEdit(!edit)}>Edit</button>
        <button onClick={()=>deletePost(post.id)}>Delete</button>
    </div>
  )
}
export default PostCard