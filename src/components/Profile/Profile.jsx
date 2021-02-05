import MyPostsContainer from './Myposts/MyPostsContainer'
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo'


const Profile = (props) => {
  
   return (
      <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer /> 
        Main Content
      </div>
    )
}

export default Profile
