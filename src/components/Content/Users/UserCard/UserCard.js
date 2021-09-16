import {Button, Grid, Paper, styled} from "@material-ui/core";
import myCSS from './UserCard.module.css'
import Typography from "@material-ui/core/Typography";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: theme.spacing(15)
}));

let UserCard = (props) => {

    let subscribeButton = () => {
        if (props.status) {
            return (
                <Button variant="contained" onClick={() => {props.onUnsubscribe(props.id)}}>
                    Отписаться
                </Button>
            );
        } else {
            return (
                <Button variant="contained" onClick={() => {props.onSubcribe(props.id)}}>
                    Подписаться
                </Button>
            );
        }
    }


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>
                        <div className={myCSS.userLogo}>
                            <img src={props.avatarUrl} alt={props.name}/>
                        </div>
                        <div>
                            {subscribeButton()}
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={9}>
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography variant="h4" align='left' gutterBottom={true}>{props.name}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5" align='right'
                                            gutterBottom={true}>{props.location.citiName}</Typography>
                                <Typography variant="h5" align='right'
                                            gutterBottom={true}>{props.location.countryName}</Typography>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default UserCard;