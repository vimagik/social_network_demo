import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {AddPost, UpdateTextArea} from "./redux/state";
import {subscribe} from "./redux/state";

let RenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={AddPost} updateTextArea={UpdateTextArea}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

RenderTree();

subscribe(RenderTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
