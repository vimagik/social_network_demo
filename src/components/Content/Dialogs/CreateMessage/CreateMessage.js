import st from './CreateMessages.module.css'
import React from "react";
import {Button} from "@material-ui/core";

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
        if (ev.ctrlKey && ev.code === 'Enter') {
            props.addMessage();
        }
    }

    return (
        <div className={st.AddMessageBlock}>
            <textarea ref={textBlock} cols="30" rows="10" onChange={updateValueAddMessage} value={props.newTextValue}
                      onKeyPress={CtrlEnter}/>
            <div>
                <Button variant="contained" color="secondary" onClick={AddMessage}>
                    Добавить сообщение
                </Button>
            </div>
        </div>
    );
}

export default CreateMessage;