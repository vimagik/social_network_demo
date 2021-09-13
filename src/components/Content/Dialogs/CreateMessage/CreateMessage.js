import st from './CreateMessages.module.css'
import React from "react";
import {actionAddMessage, actionUpdateMessageText} from "../../../../redux/DialogPageReducer";

function CreateMessage(props) {

    let textBlock = React.createRef();

    let AddMessage = () => {
        props.dispatch(actionAddMessage());
    }

    let updateValueAddMessage = (el) => {
        let text = el.target.value;
        props.dispatch(actionUpdateMessageText(text));
    }

    let CtrlEnter = (ev) => {
        if (ev.ctrlKey && ev.code==='Enter'){
            AddMessage()
        }
    }

    return (
        <div className={st.AddMessageBlock}>
            <textarea ref={textBlock} cols="30" rows="10" onChange={updateValueAddMessage} value={props.newTextValue} onKeyPress={CtrlEnter}/>
            <div>
                <button onClick={AddMessage}>Добавить сообщение</button>
            </div>
        </div>
    );
}

export default CreateMessage;