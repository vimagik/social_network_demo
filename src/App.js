import './App.css';
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import Content from "./components/Content/Profile/Content";
import Dialogs from "./components/Content/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigator/>
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Content}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
