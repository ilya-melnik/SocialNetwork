import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MyPostPropsType} from "../../App";


const Dialogs = (props: MyPostPropsType) => {
    let dialogsElement = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>
        )

    let messageElement = props.messageData
        .map(message => <Message message={message.message}/>)

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