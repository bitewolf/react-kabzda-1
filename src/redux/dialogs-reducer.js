import { act } from "react-dom/test-utils"

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  message__data: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Anna'},
      {id: 4, message: 'IT-Kamasytra'},
      {id: 5, message: 'yo'},
      {id: 6, message: 'guys'}
  ],
  dialogs__data: [
      {id: 1, name: 'Dimych', avatar: "https://html5css.ru/w3css/img_avatar3.png"},
      {id: 2, name: 'Sveta', avatar: "https://html5css.ru/howto/img_avatar2.png"},
      {id: 3, name: 'Anna', avatar: "https://html5css.ru/w3images/avatar6.png"},
      {id: 4, name: 'Viktor', avatar: "https://html5css.ru/w3images/avatar2.png"},
      {id: 5, name: 'Anjelika', avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaxVdFMklNhgxbmL4UY0cfK3_jP8BrQBLAg&usqp=CAU"},
      {id: 6, name: 'Valery', avatar: "https://www.blexar.com/avatar.png"}
  ],
  newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body
        return state
      case SEND_MESSAGE:
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.message__data.push({id: 7, message: body})
        return state
      default:
        return state
}
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer