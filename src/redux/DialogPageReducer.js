const UPDATE_TEXT_DIALOGS = 'UPDATE-TEXT-DIALOGS';
const ADD_MESSAGE = 'ADD-MESSAGE';

const DialogPageReducer = (state, action) => {
        switch (action.type) {
            case UPDATE_TEXT_DIALOGS:
                state.textMessageValue = action.currentText;
                return state;
            case ADD_MESSAGE:
                let newMessage =  {
                    id: state.messageData.length + 1,
                    message: state.textMessageValue
                }
                state.messageData.push(newMessage);
                state.textMessageValue = '';
                return state;
            default:
                return state;
        }
}

export const actionUpdateMessageText = (text) => ({type: UPDATE_TEXT_DIALOGS, currentText: text });
export const actionAddMessage = () => ({type: ADD_MESSAGE});
export default DialogPageReducer;