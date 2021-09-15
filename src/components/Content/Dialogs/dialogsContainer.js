import Dialogs from "./dialogs";
import {actionAddMessage, actionUpdateMessageText} from "../../../redux/DialogPageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return ({
        dialogItemData: state.dialogsPage.dialogItemData,
        messageData: state.dialogsPage.messageData,
        textMessageValue: state.dialogsPage.textMessageValue
    });
}

let mapDispatchToProps = (dispatch) => {
    return ({
        onAddMessage: () => {dispatch(actionAddMessage())},
        onupdateValueAddMessage: (text) => {dispatch(actionUpdateMessageText(text))}
    });
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer