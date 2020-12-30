import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
          <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" alt=""/>
         
          <div> {props.message}</div>
          <div> ♥{props.likes}</div>
          
          
        </div>
    )
}

export default Post