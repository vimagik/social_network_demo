import st from './dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import MessageValue from "./MessageValue/MessageValue";

function Dialogs(props) {

    let dialogs = props.data.dialogItemData.map( item => <DialogItem key={item.id} id={item.id} name={item.name}/>);
    let messages = props.data.messageData.map(item => <MessageValue key={item.id} message={item.message}/>);

    return (
        <div className={st.Dialogs}>
            <div className={st.DialogsItems}>
                {dialogs}
            </div>
            <div className={st.Messages}>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs