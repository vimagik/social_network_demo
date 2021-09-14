const UPDATE_TEXT_DIALOGS = 'UPDATE-TEXT-DIALOGS';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogItemData: [
        {id: '1', name: 'Георгий'},
        {id: '2', name: 'Машуля'},
        {id: '3', name: 'Семен'},
        {id: '4', name: 'Полина'},
        {id: '5', name: 'Софья'},
        {id: '6', name: 'Иван'}
    ],
    messageData: [
        {id: 0, message: 'Привет!'},
        {id: 1, message: 'Как дела?'},
        {id: 2, message: 'Отлично!'},
        {id: 3, message: 'Эгегей!'},
        {id: 4, message: 'Yo!'},
    ],
    textMessageValue: ''
}

const DialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXT_DIALOGS:
            state.textMessageValue = action.currentText;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
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

export const actionUpdateMessageText = (text) => ({type: UPDATE_TEXT_DIALOGS, currentText: text});
export const actionAddMessage = () => ({type: ADD_MESSAGE});
export default DialogPageReducer;