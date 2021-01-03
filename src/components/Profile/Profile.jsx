import { updateNewPostText } from '../../redux/state'
import MyPosts from './Myposts/MyPosts'
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo'
import s from './Profile.module.css'


const Profile = (props) => {


  return (
      <div>
      <ProfileInfo />
      <MyPosts post__data={props.profilePage.post__data} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/> 
        Main Content
      </div>
    )
}

export default Profile
