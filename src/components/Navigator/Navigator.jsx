import style from './Navigator.module.css';
import {NavLink} from "react-router-dom";
import {MenuItem, MenuList} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        color: "white",
    }
}));

function Navigator() {
    const classes = useStyles();

    return (
        <nav className={style.nav}>
            <MenuList className={classes.main}>
                <NavLink to="/profile" activeClassName={style.active}>
                    <MenuItem>Профиль</MenuItem>
                </NavLink>
                <NavLink to="/dialogs" activeClassName={style.active}>
                    <MenuItem>Сообщения</MenuItem>
                </NavLink>
                <NavLink to="/news" activeClassName={style.active}>
                    <MenuItem>Новости</MenuItem>
                </NavLink>
                <NavLink to="/music" activeClassName={style.active}>
                    <MenuItem>Музыка</MenuItem>
                </NavLink>
                <NavLink to="/settings" activeClassName={style.active}>
                    <MenuItem>Настройки</MenuItem>
                </NavLink>
                <NavLink to="/users" activeClassName={style.active}>
                    <MenuItem>Пользователи</MenuItem>
                </NavLink>
            </MenuList>
        </nav>
    );
}

export default Navigator;