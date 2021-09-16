const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const ADD_USERS = 'ADD_USERS';

let usersData = [
    {id:0, name: 'Жора', status: true, location: {citiName: 'Москва', countryName: 'Россия'}, avatarUrl: 'https://x8sweo3how.a.trbcdn.net/wp-content/uploads/2020/12/avatarki-dlya-ks-go.jpg'},
    {id:1, name: 'Петя', status: false, location: {citiName: 'Йошкар-ола', countryName: 'Россия'}, avatarUrl: 'https://x8sweo3how.a.trbcdn.net/wp-content/uploads/2020/12/avatarki-dlya-ks-go.jpg'},
    {id:2, name: 'Слава', status: true, location: {citiName: 'Новые васюки', countryName: 'США'}, avatarUrl: 'https://x8sweo3how.a.trbcdn.net/wp-content/uploads/2020/12/avatarki-dlya-ks-go.jpg'},
    {id:3, name: 'Егор', status: false, location: {citiName: 'Москва', countryName: 'Канада'}, avatarUrl: 'https://x8sweo3how.a.trbcdn.net/wp-content/uploads/2020/12/avatarki-dlya-ks-go.jpg'}
];

let initialState = {
    usersData: usersData
}

const UserPageReducer = (state = initialState, action) => {

    let newState;

    switch (action.type){
        case SUBSCRIBE:
            debugger;
            newState = {...state, usersData: [...state.usersData]};
            newState.usersData[action.userId].status = true;
            return newState;
        case UNSUBSCRIBE:
            debugger;
            newState = {...state, usersData: [...state.usersData]};
            newState.usersData[action.userId].status = false;
            return newState;
        case ADD_USERS:
            newState = {...state, usersData: action.userdata}
            return newState
        default:
            return state
    }
}

export const subscribeAC = (userId) => ({type: SUBSCRIBE, userId: userId});
export const unsubcribeAC = (userId) => ({type: UNSUBSCRIBE, userId: userId});
export const addUsersAC = (userdata) => ({type: ADD_USERS, userdata: userdata});

export default UserPageReducer;