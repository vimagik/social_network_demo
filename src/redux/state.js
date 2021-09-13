let state = {
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
}

let updateTree;

export const AddPost = () => {
    let newPost = {
        id: state.profilePage.postData.length + 1,
        message: state.profilePage.currentTextValue,
        likeCounts: 0
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.currentTextValue = '';
    updateTree();
}

export const UpdateTextArea = (currentText) => {
    state.profilePage.currentTextValue = currentText;
    updateTree();
}

export const subscribe = (observer) => {
    updateTree = observer;
}

export default state;