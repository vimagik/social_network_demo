import style from './Content.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Content(props) {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <Posts data={props.data.postData} addPost={props.addPost} textValue={props.data.currentTextValue} updateTextArea={props.updateTextArea}/>
        </div>
    );
}

export default Content;