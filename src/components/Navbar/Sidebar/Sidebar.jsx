import s from './../Navbar.module.css'
import React from 'react'

const Sidebar = (props) => {

    return (
        <div className={s.sidebar}>
          <div className={s.tag}>Friends</div>
          <div className={s.friends}>
            <div className={s.friend}>
              <img className={s.avatar} src={props.sidebar.friends[0].avatar} alt=""/>
              <div className={s.name}>{props.sidebar.friends[0].name}</div>
            </div>
            <div className={s.friend}>
              <img className={s.avatar} src={props.sidebar.friends[1].avatar} alt=""/>
              <div className={s.name}>{props.sidebar.friends[1].name}</div>
            </div>
            <div className={s.friend}>
              <img className={s.avatar} src={props.sidebar.friends[2].avatar} alt=""/>
              <div className={s.name}>{props.sidebar.friends[2].name}</div> 
            </div>
          </div>
        </div>
    )

}

export default Sidebar