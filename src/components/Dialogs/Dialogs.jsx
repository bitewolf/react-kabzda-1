import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialog__item = (props) => {
    let path = "/dialogs/" + props.id;
    return (
                <div className={s.dialogs__item + ' ' + s.active}>
                    <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
                </div>
    )
}

const Dialogs__message = (props) => {
    return (
        <div className={s.dialogs__message}>{props.message}</div>
        )
    
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <Dialog__item name='Dimych' id='1'/>
                <Dialog__item name='Sveta' id='2' />
                <Dialog__item name='Anna' id='3' />
                <Dialog__item name='Viktor' id='4' />
                <Dialog__item name='Anjelika' id='5' />
                <Dialog__item name='Valery' id='6' />
            </div>
            <div className={s.dialogs__messages}>
                <Dialogs__message message="Hi"/>
                <Dialogs__message message="How are you?"/>
                <Dialogs__message message="IT-Kamasytra"/>
                <Dialogs__message message="yo"/>
                <Dialogs__message message="guys"/>
            </div>
        </div>
    )
}

export default Dialogs