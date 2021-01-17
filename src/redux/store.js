import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
      profilePage: {
          post__data: [
              {id: 1, likes: 1000, message: 'hi, how a you?'},
              {id: 2, likes: 2, message: 'олололо'},
              {id: 3, likes: 93, message: 'тролололо'},
              {id: 4, likes: 40, message: 'кек'},
              {id: 5, likes: 1, message: 'пыщ'},
              {id: 6, likes: 16, message: 'lil'}
          ],
          newPostText: "it-kamasutra.com"
    },
      messagesPage: {
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
    },
      sidebar: {
          friends: [
              {id: 1, name: 'Kent', avatar: "https://html5css.ru/w3images/avatar2.png"},
              {id: 2, name: 'Brat', avatar: "https://html5css.ru/w3css/img_avatar3.png"},
              {id: 3, name: 'Chelik', avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
          ]
      }
    },
    _callSubscriber() {
      console.log('State changed')
      },

    getState() {
      return this._state
    },
    subscribe(observer) {
      this._callSubscriber = observer //observer
    },

    dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)

      this._callSubscriber(this._state)
 
    }
  }



  


  export default store
  window.store = store