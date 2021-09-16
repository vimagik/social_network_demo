import {Container} from "@material-ui/core";
import UserCard from "./UserCard/UserCard";
import Typography from "@material-ui/core/Typography";
import myCSS from './Users.module.css'

const Users = (props) => {


    let userParse = props.usersData.map(item =>
        <UserCard
            id={item.id}
            name={item.name}
            avatarUrl={item.avatarUrl}
            location={item.location}
            onSubcribe={props.onSubscribe}
            onUnsubscribe={props.onUnsubscribe}
            status={item.status}
        />
    );

    return (
        <div className={myCSS.main}>
            <Container maxWidth="xl">
                <Typography variant="h5" align='center' gutterBottom={true}>Пользователи</Typography>
                <div>{userParse}</div>
            </Container>
        </div>
    );
}

export default Users;