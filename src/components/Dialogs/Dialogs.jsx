import { NavLink } from 'react-router-dom'
import Dialog__item from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Dialogs__message from './Message/Message'
import React from 'react'
  
const Dialogs = (props) => {

    let dialogs__elements = props.state.dialogs__data
    .map ( dialog => <Dialog__item name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)

    let message__elements = props.state.message__data
    .map ( message => <Dialogs__message message={message.message}/>)
    
    let newMessage = React.createRef();

    let addMessage = () => {
      let text = newMessage.current.value;
      alert(text)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs__items}>
                    {dialogs__elements}
                </div>
                <div className={s.dialogs__messages}>
                    {message__elements}
                </div>
            </div>
            <div  className={s.posts__block}>
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs