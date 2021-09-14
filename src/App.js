import './App.css';
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import Content from "./components/Content/Profile/Content";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import DialogsContainer from "./components/Content/Dialogs/dialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigator/>
                <Route exact path="/">
                    <Redirect to="/dialogs"/>
                </Route>
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/profile" render={() => <Content store={props.store}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
