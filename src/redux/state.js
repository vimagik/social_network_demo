import ProfilePageReducer from "./ProfilePageReducer";
import DialogPageReducer from "./DialogPageReducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postData: [
                {id: 0, message: 'Привет как дела?', likeCounts: 12},
                {id: 1, message: 'Как я сюда полпа?', likeCounts: 11},
                {id: 2, message: 'Кто здесь?', likeCounts: 9},
                {id: 3, message: 'У меня все получится!', likeCounts: 99},
            ],
            currentTextValue: ''
        }
    },
    _updateTree() {
    },
    subscribe(observer) {
        this._updateTree = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        ProfilePageReducer(this.getState().profilePage, action);
        DialogPageReducer(this.getState().dialogsPage, action);
        this._updateTree();
 }
}

export default store;