import style from './Content.module.css'
import Posts from "./Posts/Posts";

function Content() {
    return (
        <div className={style.content}>
            <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" alt="Баннер"/>
            <div>Аватар + описание</div>
            <Posts />
        </div>
    );
}

export default Content;