import React from 'react';
import {SidebarPageType} from "../../redux/state";
import s from "./Friends.module.css"


const Friands = (props: SidebarPageType) => {
    let FriendElement = props.friends.map(({id, img,name}) => {
       return (<div className={s.friend} key={id}>
           <img className={s.ava} src={img}/>
           <span className={s.name}>{name}</span></div>)
    })
    return(
        <div className={s.friendsBlock}>
            {FriendElement}
        </div>)
}

export default Friands;
