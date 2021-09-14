import Dialogs from "./dialogs";
import {actionAddMessage, actionUpdateMessageText} from "../../../redux/DialogPageReducer";

function DialogsContainer(props) {

    let state = props.store.getState();

    return (
         <Dialogs
            dialogItemData={state.dialogsPage.dialogItemData}
            messageData={state.dialogsPage.messageData}
            textMessageValue={state.dialogsPage.textMessageValue}
            onAddMessage={() => {props.store.dispatch(actionAddMessage())}}
            onupdateValueAddMessage={(text) => {props.store.dispatch(actionUpdateMessageText(text))}}
        />
    );
}

export default DialogsContainer