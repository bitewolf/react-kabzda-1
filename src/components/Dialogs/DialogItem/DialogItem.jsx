import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const Dialog__item = (props) => {
    let path = "/dialogs/" + props.id;
    return (
                <div className={s.dialogs__item + ' ' + s.active}>
                    <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
                </div>
    )
}


export default Dialog__item