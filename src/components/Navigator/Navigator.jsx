import style from './Navigator.module.css'

function Navigator() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                Профиль
            </div>
            <div>
                Сообщения
            </div>
        </nav>
    );
}

export default Navigator;