import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
      <div>
      <div className={s.image}>
        <img src="https://onesource.be/wp-content/uploads/2020/02/7-things-every-java-programmer-should-learn-right-now-to-improve-skill.jpg" alt=""/>
      </div>
      <div className={s.description__block}>
        ava + description
      </div>
    </div>
    )
}

export default ProfileInfo