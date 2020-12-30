import s from './Navbar.module.css'
import profileLogo from './img/profile.svg'
import messagesLogo from './img/messages.svg'
import newsLogo from './img/news.svg'
import musicLogo from './img/music.svg'
import settingsLogo from './img/settings.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
         <img className={s.icon} src={profileLogo} alt=""/>
         <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink> 
        </div>  
        <div className={s.item}>
        <img className={s.icon} src={messagesLogo} alt=""/>
         <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink> 
        </div>  
        <div className={s.item}>
        <img className={s.icon} src={newsLogo} alt=""/>
         <NavLink to="/news" activeClassName={s.active}>News</NavLink> 
        </div>  
        <div className={s.item}>
        <img className={s.icon} src={musicLogo} alt=""/>
         <NavLink to="/music" activeClassName={s.active}>Music</NavLink> 
        </div>  
        <div className={s.item}>
        <img className={s.icon} src={settingsLogo} alt=""/>
         <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink> 
        </div>  
      </nav>
    )
}

export default Navbar