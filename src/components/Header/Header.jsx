import s from './Header.module.css'
import sLogo from './img/s-symbol.svg'
const Header = () => {
    return (
        <header className={s.header}>
            <img src={sLogo} alt="logo"/>
            <span>AMURAI NetWork</span>
        </header>
    )
}

export default Header