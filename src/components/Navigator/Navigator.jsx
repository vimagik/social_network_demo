import style from './Navigator.module.css';
import {NavLink} from "react-router-dom";

function Navigator() {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to="/profile" activeClassName={style.active}>Профиль</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={style.active}>Сообщения</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={style.active}>Новости</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={style.active}>Музыка</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={style.active}>Настройки</NavLink>
            </div>
        </nav>
    );
}

export default Navigator;