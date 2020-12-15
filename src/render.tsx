import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostMess, RootStateType, updateNewMessPostText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import { addPost } from "./redux/state";

export let renderEntireTree = (state: RootStateType) => {
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
         <App state={state} addPost={ addPost }
              updateNewPostText={updateNewPostText}
              addPostMess={addPostMess}
              updateNewMessPostText={updateNewMessPostText}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
}

