import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogPageReducer from "./DialogPageReducer";
import UserPageReducer from "./UserPageReducer";

let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogPageReducer,
    usersPage: UserPageReducer
});

let store = createStore(reducers);

export default store;