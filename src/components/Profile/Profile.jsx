import MyPostsContainer from './Myposts/MyPostsContainer'
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo'


const Profile = (props) => {
  
   return (
      <div>
      <ProfileInfo />
      <MyPostsContainer /> 
        Main Content
      </div>
    )
}

export default Profile
