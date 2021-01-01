import MyPosts from './Myposts/MyPosts'
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo'
import s from './Profile.module.css'


const Profile = () => {

  let post__dataP = [
    {id: 1, likes: 1000, message: 'xyй'},
    {id: 2, likes: 2, message: 'xyй'},
    {id: 3, likes: 93, message: 'xyй'},
    {id: 4, likes: 40, message: 'xyй'},
    {id: 5, likes: 1, message: 'xyй'},
    {id: 6, likes: 16, message: 'xyй'}
  ]


  return (
      <div>
      <ProfileInfo />
      <MyPosts /> 
        Main Content
      </div>
    )
}

export default Profile
