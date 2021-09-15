const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const ADD_POST = 'ADD-POST';

let initialState = {
    postData: [
        {id: 0, message: 'Привет как дела?', likeCounts: 12},
        {id: 1, message: 'Как я сюда полпа?', likeCounts: 11},
    ],
    currentTextValue: ''
}

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                message: state.currentTextValue,
                likeCounts: 0
            }
            let addState = {...state};
            addState.postData = [...state.postData];
            addState.postData.push(newPost);
            addState.currentTextValue = '';
            return addState;
        case UPDATE_TEXT_AREA:
            let updateState = {...state};
            updateState.currentTextValue = action.currentText;
            return updateState;
        default:
            return state;
    }
}

export const actionUpdateText = (text) => ({type: UPDATE_TEXT_AREA, currentText: text});
export const actionAddPost = () => ({type: ADD_POST});
export default ProfilePageReducer;