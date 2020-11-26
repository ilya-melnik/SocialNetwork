import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [
    {id: 1, message: "hi, how are you", likesCount: 13},
    {id: 2, message: "My name is ilya", likesCount: 3},
]

const dialogsData = [
    {id: 1, name: 'Nina'},
    {id: 2, name: 'Violeta'},
    {id: 3, name: 'Ruth'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Mikl'},
    {id: 6, name: 'Pavel'}
]
const messageData = [
    {id: 1, message: "hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yesss"},
    {id: 4, message: "Nina, what do you do?"},
    {id: 5, message: "what do you made ?"}
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
