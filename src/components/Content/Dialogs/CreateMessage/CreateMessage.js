import st from './CreateMessages.module.css'
import React from "react";

function CreateMessage(props) {

    let textBlock = React.createRef();

    let AddMessage = () => {
        props.addMessage();
    }

    let updateValueAddMessage = (el) => {
        let text = el.target.value;
        props.updateValueAddMessage(text);
    }

    let CtrlEnter = (ev) => {
        if (ev.ctrlKey && ev.code==='Enter'){
            props.addMessage();
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