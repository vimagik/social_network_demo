import {actionAddPost, actionUpdateText} from "../../../../redux/ProfilePageReducer";
import Posts from "./Posts";

function PostsContainer(props) {

    const state = props.store.getState();

    let onUpdateText = (textValue) => {
        props.store.dispatch(actionUpdateText(textValue));
    }

    let onClickButtonAction = () => {
        props.store.dispatch(actionAddPost());
    }

    return (
        <Posts
            data={state.profilePage.postData}
            textValue={state.profilePage.currentTextValue}
            onUpdateText={onUpdateText}
            onClickButtonAction={onClickButtonAction}
        />
    );
}

export default PostsContainer;