import Preloader from '../../../Common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  } else {
    return (
      <div>
      <div className={s.image}>
        <img src="https://onesource.be/wp-content/uploads/2020/02/7-things-every-java-programmer-should-learn-right-now-to-improve-skill.jpg" alt=""/>
      </div>
      <div className={s.description__block}>
        <img src={props.profile.photos.large} alt=""/>
        ava + description
      </div>
    </div>
    )
  }
    
}

export default ProfileInfo