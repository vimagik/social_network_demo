import style from './Content.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

function Content(props) {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <PostsContainer store={props.store} />
        </div>
    );
}

export default Content;