import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync } from '../redux/posts/postsActions';


const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postsReducer)

  const getPostsFromServer = ()=>{
    dispatch(getPostsAsync())
  }
  console.log("posts, ",posts.postsReducer)
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={getPostsFromServer}>Get posts from the server</button>
      {posts.isLoading && <h1>Loading</h1>}
      {posts.error && <h1>{posts.error}</h1>}
      {!posts.error && !posts.isLoading && posts.posts.map(post => <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>)}
    </div>
  )
}

export default Posts