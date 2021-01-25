import React from 'react'
import styles from './users.module.css'
import { unfollowAC } from '../../redux/users-reducer'

let Users = (props) => {
debugger
    if (props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, photoUrl: 'https://izhevskinfo.ru/pictures/news/91108.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Braslav', country: 'Belarus'}},
                {id: 2, photoUrl: 'https://izhevskinfo.ru/pictures/news/91108.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss', location: {city: 'Lviv', country: 'Ukraine'}},
                {id: 3, photoUrl: 'https://izhevskinfo.ru/pictures/news/91108.jpg', followed: false, fullName: "Ashot", status: 'I am a boss', location: {city: 'Piter', country: 'Russia'}}
        
            ]
    )

    
        }

    return <div>
        {
        props.users.map( u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                    ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                    
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
                
            </span>
            </div>)    
            }
            </div>
}

export default Users