const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
      post__data: [
          {id: 1, likes: 1000, message: 'hi, how a you?'},
          {id: 2, likes: 2, message: 'олололо'},
          {id: 3, likes: 93, message: 'тролололо'},
          {id: 4, likes: 40, message: 'кек'},
          {id: 5, likes: 1, message: 'пыщ'},
          {id: 6, likes: 16, message: 'lil'}
      ],
      newPostText: "it-kamasutra.com",
      profile: null
}

const profileReducer = (state = initialState, action) => {
      
    switch(action.type) {
          
      case ADD_POST: {
        let newPost = {
          id: 7,
          message: state.newPostText,
          likes: 0
    }
          return {...state, post__data: [...state.post__data, newPost], newPostText: ''}
        
      }
      case UPDATE_NEW_POST_TEXT:{
            return {...state, newPostText: action.text}
      }
      
      case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
      }
      default:
            return state
  } 
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewTextPostActionCreator = (text) =>
({type: UPDATE_NEW_POST_TEXT, text: text})

export default profileReducer