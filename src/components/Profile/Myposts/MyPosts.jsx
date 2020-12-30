import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {

  let post__data = [
    {likes: 1000, message: 'hi, how a you?'},
    {likes: 2, message: 'олололо'},
    {likes: 93, message: 'тролололо'},
    {likes: 40, message: 'кек'},
    {likes: 1, message: 'пыщ'},
    {likes: 16, message: 'lil'}
]

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
        <Post message={post__data[0].message} likes={post__data[0].likes}/>
        <Post message={post__data[1].message} likes={post__data[1].likes}/>
       
      </div>
    </div>
    )
}

export default MyPosts