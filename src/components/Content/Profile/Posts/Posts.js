import Post from "./Post/Post";
import style from "./Posts.module.css";
import React from "react";
import {Button} from "@material-ui/core";

function Posts(props) {

    let postRender = props.data.map(post => <Post key={post.id} message={post.message} likecounts={post.likeCounts}/>)

    let textAreaObj = React.createRef();

    let UpdateText = () => {
        let textValue = textAreaObj.current.value;
        props.onUpdateText(textValue);
    }

    let ClickButtonAction = () => {
        props.onClickButtonAction();
    }

    return (
        <div className={style.postBody}>Мои посты
            <div>Новый пост</div>
            <textarea cols="30" rows="10" ref={textAreaObj} onChange={UpdateText} value={props.textValue}/>
            <div className={style.postButton}>
                <Button variant="contained" color="secondary" onClick={ClickButtonAction}>
                    Отправить
                </Button>
            </div>
            <div>
                {postRender}
            </div>
        </div>
    );
}

export default Posts;