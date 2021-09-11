import Post from "./Post/Post";
import style from "./Posts.module.css";

function Posts(props) {

    let postRender = props.data.map(post => <Post key={post.id} message={post.message} likecounts={post.likeCounts}/>)

    return (
        <div className={style.postBody}>Мои посты
            <div>Новый пост</div>
            <textarea cols="30" rows="10"/>
            <div className={style.postButton}>
                <button>Отправить</button>
            </div>
            <div>
                {postRender}
            </div>
        </div>
    );
}

export default Posts;