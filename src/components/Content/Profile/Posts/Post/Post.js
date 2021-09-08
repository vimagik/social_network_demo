import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.item}>
            <img src="https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg" alt="Аватар"/>
            {props.message}
            <span> {props.likecounts} Like</span>
        </div>
    );
}

export default Post;