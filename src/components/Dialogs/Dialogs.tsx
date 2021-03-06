import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogsType, MessageType} from "../../redux/state";


type PropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    addPostMess: () => void
    updateNewMessPostText: (newMessText: string) => void
}

const Dialogs = (props: PropsType) => {
    let dialogsElement = props.dialogs.map(dialog => <DialogItem avatar={dialog.avatar} name={dialog.name}
                                                                 id={dialog.id}/>
    )

    let messageElement = props.message
        .map(message => <Message key={message.id} id={message.id} message={message.message} isMine={message.isMine}/>)


    let newPostElements = React.createRef<HTMLTextAreaElement>();
    let addPostMess = () => {
      props.addPostMess()
    }

const updateNewMessPostTextj  = () => {
    let text = newPostElements.current?.value
    if(text) {
        props.updateNewMessPostText(text)
    }}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages} style={{border: '1px solid black'}}>
                {messageElement}
                <div className={s.textereaAdd}>
                    <textarea onChange={updateNewMessPostTextj} ref={newPostElements}></textarea>
                    <button onClick={addPostMess}>Add</button>
                </div>

            </div>


        </div>

    );
}
export default Dialogs;