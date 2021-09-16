import {addUsersAC, subscribeAC, unsubcribeAC} from "../../../redux/UserPageReducer";
import {connect} from "react-redux";
import Users from "./Users";


const mapStateToProps = (state) => {
    return ({
        usersData: state.usersPage.usersData
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        onSubscribe: (userId) => {dispatch(subscribeAC(userId))},
        onUnsubscribe: (userId) => {dispatch(unsubcribeAC(userId))},
        onAddUsers: (userdata) => {dispatch(addUsersAC(userdata))}
    });
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;