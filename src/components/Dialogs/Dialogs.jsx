import { NavLink } from 'react-router-dom'
import Dialog__item from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Dialogs__message from './Message/Message'



    let dialogs__data = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Anjelika'},
        {id: 6, name: 'Valery'}
    ]

    let dialogs__elements = dialogs__data
    .map ( dialog => <Dialog__item name={dialog.name} id={dialog.id}/>)

    let message__data = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Anna'},
        {id: 4, message: 'IT-Kamasytra'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'guys'}
    ]

    let message__elements = message__data
    .map ( message => <Dialogs__message message={message.message}/>)
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogs__elements}
            </div>
            <div className={s.dialogs__messages}>
                {message__elements}
            </div>
        </div>
    )
}

export default Dialogs