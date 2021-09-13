const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const ADD_POST = 'ADD-POST';

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
                {id: '0', message: 'Привет!'},
                {id: '1', message: 'Как дела?'},
                {id: '2', message: 'Отлично!'},
                {id: '3', message: 'Эгегей!'},
                {id: '4', message: 'Yo!'},
            ]
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
    getState(){
        return this._state;
    },
    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
            id: this._state.profilePage.postData.length + 1,
            message: this._state.profilePage.currentTextValue,
            likeCounts: 0
        }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.currentTextValue = '';
            this._updateTree();
        } else if (action.type === UPDATE_TEXT_AREA){
            this._state.profilePage.currentTextValue = action.currentText;
            this._updateTree();
        }
    },
}

export const actionUpdateText = (text) => {
    return ({
        type: UPDATE_TEXT_AREA,
        currentText: text
    });
}

export const actionAddPost = () => {
    return ({
        type: ADD_POST
    });
}

export default store;