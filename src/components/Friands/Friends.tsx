import React from 'react';
import {SidebarPageType} from "../../redux/state";



const Friands = (props: SidebarPageType) => {
    let FriendElement = props.friends.map(({id, img,name}) => {
       return (<div key={id}>
           <img src={img}/>
           {name}</div>)
    })
    return(
        <div>
            {FriendElement}
        </div>)
}

export default Friands;
