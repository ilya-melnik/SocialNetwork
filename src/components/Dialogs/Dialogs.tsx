import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType, MessageData} from "../../App";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messageData: Array<MessageData>

}

const Dialogs = (props: DialogsPropsType  ) => {
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