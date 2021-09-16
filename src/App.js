import './App.css';
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import Content from "./components/Content/Profile/Content";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import DialogsContainer from "./components/Content/Dialogs/dialogsContainer";
import {createTheme, MuiThemeProvider} from "@material-ui/core";
import {indigo, red} from "@material-ui/core/colors";
import Users from './components/Content/Users/Users';

const theme = createTheme({
    palette: {
        primary: red,
        secondary: indigo,
    },
});

function App(props) {
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Header/>
                    <Navigator/>
                    <Route exact path="/">
                        <Redirect to="/dialogs"/>
                    </Route>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile" render={() => <Content/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={() => <Users/>}/>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>
    );
}

export default App;
