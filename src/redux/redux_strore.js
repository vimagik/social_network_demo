import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogPageReducer from "./DialogPageReducer";

let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogPageReducer
});

let store = createStore(reducers);

export default store;