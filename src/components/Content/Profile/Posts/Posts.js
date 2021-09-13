import Post from "./Post/Post";
import style from "./Posts.module.css";
import React from "react";
import {actionAddPost, actionUpdateText} from "../../../../redux/ProfilePageReducer";



function Posts(props) {

    let postRender = props.data.map(post => <Post key={post.id} message={post.message} likecounts={post.likeCounts}/>)

    let textAreaObj = React.createRef();

    let UpdateText = () => {
        let textValue = textAreaObj.current.value;
        props.dispatch(actionUpdateText(textValue))
    }

    let onClickButtonAction = () => {
        props.dispatch(actionAddPost());
    }

    return (
        <div className={style.postBody}>Мои посты
            <div>Новый пост</div>
            <textarea cols="30" rows="10" ref={textAreaObj} onChange={UpdateText} value={props.textValue}/>
            <div className={style.postButton}>
                <button onClick={onClickButtonAction}>Отправить</button>
            </div>
            <div>
                {postRender}
            </div>
        </div>
    );
}

export default Posts;