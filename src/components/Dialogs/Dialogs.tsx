import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


const Dialogs = (props: DialogsPageType  ) => {
    let dialogsElement = props.dialogs.map(dialog => <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id}/>
        )

    let messageElement = props.message
        .map(message => <Message key={message.id} id={message.id} message={message.message} isMine={message.isMine}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages} style={{border: '1px solid black'}}>
                {messageElement}
            </div>
        </div>
    );
}
export default Dialogs;