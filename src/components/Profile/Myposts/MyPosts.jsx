import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
      <div>
      <h3>my posts</h3>
      <div  className={s.posts__block}>
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        
        
      </div>
      <div className={s.posts}>
        <Post message='hi, how a you?' likes='1 like'/>
        <Post message='олололо' likes='3 likes'/>
        <Post message='тролололо' likes='2 лейпцига'/>
        <Post message='кек' likes='5 лукасов'/>
        <Post message='пыщ' likes='77 луцианосов'/>
        
      </div>
    </div>
    )
}

export default MyPosts