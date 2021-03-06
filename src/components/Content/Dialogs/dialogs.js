import st from './dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import MessageValue from "./MessageValue/MessageValue";
import CreateMessage from "./CreateMessage/CreateMessage";

function Dialogs(props) {

    let dialogs = props.dialogItemData.map(item => <DialogItem key={item.id} id={item.id} name={item.name}/>);
    let messages = props.messageData.map(item => <MessageValue key={item.id} message={item.message}/>);

    return (
        <div className={st.Dialogs}>
            <div className={st.DialogsItems}>
                {dialogs}
            </div>
            <div className={st.Messages}>
                {messages}
                <CreateMessage
                    newTextValue={props.textMessageValue}
                    addMessage={props.onAddMessage}
                    updateValueAddMessage={props.onupdateValueAddMessage}
                />
            </div>
        </div>
    );
}

export default Dialogs