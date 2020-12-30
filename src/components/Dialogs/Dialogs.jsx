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
    let dialogs__data = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Anjelika'},
        {id: 6, name: 'Valery'}
    ]
    let message__data = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Anna'},
        {id: 4, message: 'IT-Kamasytra'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'guys'}
    ]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <Dialog__item name={dialogs__data[0].name} id={dialogs__data[0].id}/>
                <Dialog__item name={dialogs__data[1].name} id={dialogs__data[1].id}/>

            </div>
            <div className={s.dialogs__messages}>
                <Dialogs__message message={message__data[0].message}/>
                <Dialogs__message message={message__data[1].message}/>

            </div>
        </div>
    )
}

export default Dialogs