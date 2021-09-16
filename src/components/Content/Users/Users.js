import {Container} from "@material-ui/core";
import UserCard from "./UserCard/UserCard";
import Typography from "@material-ui/core/Typography";
import myCSS from './Users.module.css'

let usersData = [
    {name: 'Жора', status: true, location: {citiName: 'Москва', countryName: 'Россия'}, avatarUrl: 'https://x8sweo3how.a.trbcdn.net/wp-content/uploads/2020/12/avatarki-dlya-ks-go.jpg'},
    {name: 'Петя', status: false, location: {citiName: 'Йошкар-ола', countryName: 'Россия'}, avatarUrl: 'https://x8sweo3how.a.trbcdn.net/wp-content/uploads/2020/12/avatarki-dlya-ks-go.jpg'},
    {name: 'Слава', status: true, location: {citiName: 'Новые васюки', countryName: 'США'}, avatarUrl: 'https://x8sweo3how.a.trbcdn.net/wp-content/uploads/2020/12/avatarki-dlya-ks-go.jpg'},
    {name: 'Егор', status: false, location: {citiName: 'Москва', countryName: 'Канада'}, avatarUrl: 'https://x8sweo3how.a.trbcdn.net/wp-content/uploads/2020/12/avatarki-dlya-ks-go.jpg'}
];


const Users = () => {

    let userParse = usersData.map(item =>
        <UserCard
            name={item.name}
            avatarUrl={item.avatarUrl}
            location={item.location}
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