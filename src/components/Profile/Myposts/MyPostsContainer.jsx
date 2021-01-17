import React from 'react'
import { addPostActionCreator, updateNewTextPostActionCreator } from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext'
import MyPosts from './MyPosts'

const MyPostsContainer = () => {
   return (
    <StoreContext.Consumer>
      {store => {

          let state = store.getState()

          let addPost = () => {
            store.dispatch(addPostActionCreator())
          }

          let onPostChange = (text) => {
            let action = updateNewTextPostActionCreator(text)
            store.dispatch(action)
          }

        return <MyPosts updateNewPostText={onPostChange} addPost={addPost} post__data={state.profilePage.post__data} newPostText={state.profilePage.newPostText}/>
      }
    }
    </StoreContext.Consumer>
    )
}

export default MyPostsContainer