const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const ADD_POST = 'ADD-POST';

const ProfilePageReducer = (state, action) => {
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