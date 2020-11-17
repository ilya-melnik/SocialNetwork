import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type MessageType = {
    message: string
}

type DialogItemType= {
    name: string
    id: string
}


const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs" + "/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink></div>
    )
}

const Message = (props: MessageType) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Nina' id="1" />
                <DialogItem name='Violeta' id="2"/>
                <DialogItem name='Ruth' id="3"/>
                <DialogItem name='Sasha' id="4"/>
                <DialogItem name='Mikl' id="5"/>
                <DialogItem name='Pavel' id="6"/>


            </div>
            <div className={s.messages}>
                <Message message='hi' />
                <Message message='How are you?' />
                <Message message='Yesss' />
                <Message message='Yesss' />
                <Message message='Yesss' />
            </div>
        </div>
    );
}
export default Dialogs;