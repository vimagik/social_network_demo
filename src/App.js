import './App.css';
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import Content from "./components/Content/Profile/Content";
import Dialogs from "./components/Content/Dialogs/dialogs";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigator/>
                <Route exact path="/">
                    <Redirect to="/dialogs"/>
                </Route>
                <Route path="/dialogs" render={() => <Dialogs data={props.state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Content data={props.state.profilePage}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
