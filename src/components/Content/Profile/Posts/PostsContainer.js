import {actionAddPost, actionUpdateText} from "../../../../redux/ProfilePageReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return ({
        data: state.profilePage.postData,
        textValue: state.profilePage.currentTextValue
    });
}

let mapDispatchToProps = (dispatch) => {
    return ({
        onUpdateText: (textValue) => {
            dispatch(actionUpdateText(textValue))
        },
        onClickButtonAction: () => {
            dispatch(actionAddPost())
        }
    });
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;