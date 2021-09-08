import Post from "./Post/Post";

function Posts() {
    return (
        <div>Мои посты
            <div>Новый пост</div>
            <textarea cols="30" rows="10"/>
            <button>Отправить</button>
            <div>
                <Post message='Привет, как у вас дела?' likecounts='12' />
                <Post message='Как я сюда попал?' likecounts='11' />
                <Post message='Кто здесь?' likecounts='99' />
            </div>
        </div>
    );
}

export default Posts;