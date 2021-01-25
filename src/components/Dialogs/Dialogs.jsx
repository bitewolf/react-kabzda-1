import Dialog__item from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Dialogs__message from './Message/Message'
import React from 'react'
  
const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogs__elements = state.dialogs__data
    .map ( dialog => <Dialog__item name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/>)

    let message__elements = state.message__data
    .map ( message => <Dialogs__message message={message.message} key={message.id}/>)
    
    let newMessageBody =  state.newMessageBody;

    let onSendMessageClick = () => {
      props.sendMessage()
    }
    let onNewMessageChange = (e) => {
    
      let body = e.target.value
      props.updateNewMessageBody(body)
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
                    <textarea   value={newMessageBody}
                                onChange={onNewMessageChange}
                                placeholder='Ender your message'></textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs