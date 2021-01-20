import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator, updateNewTextPostActionCreator } from '../../../redux/profile-reducer'

import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
  return {
    post__data: state.profilePage.post__data,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    onPostChange: (text) => {
      let action = updateNewTextPostActionCreator(text)
      dispatch(action)
    }
}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer