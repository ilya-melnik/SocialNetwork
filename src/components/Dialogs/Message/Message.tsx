import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/state";




const Message = (props: MessageType) => {
    return (
        <div className={props.isMine ? s.dialogYour : s.dialogMi}>
            <div className={props.isMine ? s.wind__dialog_your : s.wind__dialog_mi}>{props.message}</div>
        </div>


    )
}

export default Message;