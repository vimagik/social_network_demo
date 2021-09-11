import style from './Content.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Content(props) {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <Posts data={props.data.postData}/>
        </div>
    );
}

export default Content;