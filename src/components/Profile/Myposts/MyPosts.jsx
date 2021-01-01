import s from './MyPosts.module.css'
import Post from './Post/Post'
import Profile from './../Profile'
const MyPosts = (props) => {

  let post__data = [
    {id: 1, likes: 1000, message: 'hi, how a you?'},
    {id: 2, likes: 2, message: 'олололо'},
    {id: 3, likes: 93, message: 'тролололо'},
    {id: 4, likes: 40, message: 'кек'},
    {id: 5, likes: 1, message: 'пыщ'},
    {id: 6, likes: 16, message: 'lil'}
  ]

  let posts__element = post__data.map ( p => <Post message={p.message} likes={p.likes}/>)

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
        {posts__element}
      </div>
    </div>
    )
}

export default MyPosts