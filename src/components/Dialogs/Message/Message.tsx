import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType, PostsType} from "../../../redux/state";

type PropsType = {
    id: number
    message: string
    isMine: boolean

}


const Message = (props: PropsType) => {
    return (
        <div className={props.isMine ? s.dialogYour : s.dialogMi} >
            <div className={props.isMine ? s.wind__dialog_your : s.wind__dialog_mi}>{props.message}</div>

        </div>


    )
    
}

export default Message;

