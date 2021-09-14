const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const ADD_POST = 'ADD-POST';

let initialState = {
    postData: [
        {id: 0, message: 'Привет как дела?', likeCounts: 12},
        {id: 1, message: 'Как я сюда полпа?', likeCounts: 11},
        {id: 2, message: 'Кто здесь?', likeCounts: 9},
        {id: 3, message: 'У меня все получится!', likeCounts: 99},
    ],
    currentTextValue: ''
}

const ProfilePageReducer = (state = initialState, action) => {
    switch (action) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                message: state.currentTextValue,
                likeCounts: 0
            }
            state.postData.push(newPost);
            state.currentTextValue = '';
            return state;
        case UPDATE_TEXT_AREA:
            state.currentTextValue = action.currentText;
            return state;
        default:
            return state;
    }
}

export const actionUpdateText = (text) => ({type: UPDATE_TEXT_AREA, currentText: text});
export const actionAddPost = () => ({type: ADD_POST});
export default ProfilePageReducer;