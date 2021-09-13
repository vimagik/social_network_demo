import st from './CreateMessages.module.css'
import React from "react";

function CreateMessage() {

    let textBlock = React.createRef();

    let AddMessage = () => {
        let text = textBlock.current.value;
        alert(text);
    }

    return (
        <div className={st.AddMessageBlock}>
            <textarea ref={textBlock} cols="30" rows="10"/>
            <div>
                <button onClick={AddMessage}>Добавить сообщение</button>
            </div>
        </div>
    );
}

export default CreateMessage;