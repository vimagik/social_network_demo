import st from './MessageValue.module.css';

function MessageValue(props) {
    return (
        <div className={st.MessageValue}>
            {props.message}
        </div>
    );
}

export default MessageValue;