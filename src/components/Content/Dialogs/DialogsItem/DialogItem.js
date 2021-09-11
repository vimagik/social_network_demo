import st from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <div className={st.item}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={st.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;