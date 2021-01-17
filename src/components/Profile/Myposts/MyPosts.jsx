import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

const MyPosts = (props) => {
  
  let posts__element = props.post__data
  .map ( p => <Post message={p.message} likes={p.likes}/>)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)

  }

    return (
      <div>
      <h3>my posts</h3>
      <div  className={s.posts__block}>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
            <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts__element}
      </div>
    </div>
    )
}

export default MyPosts