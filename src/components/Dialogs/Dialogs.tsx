import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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