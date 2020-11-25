import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type MessageType = {
    message: string

}

type DialogItemType = {
    name: string
    id: number
}


const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs" + "/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink></div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const dialogsData = [
    {id: 1, name: 'Nina'},
    {id: 2, name: 'Violeta'},
    {id: 3, name: 'Ruth'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Mikl'},
    {id: 6, name: 'Pavel'}
]
let dialogsElement = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    )

const messageData = [
    {id: 1, message: "hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yesss"},
    {id: 4, message: "Nina, what do you do?"},
    {id: 5, message: "what do you made ?"}
]
let messageElement = messageData
    .map(message => <Message message={message.message}/>)
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
}
export default Dialogs;