import React from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setings from "./components/Setings/Setings";
import state from './redux/state';

export type postsType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsDataType = {
    id: number
    name: string
}
type messageData = {
    id: number
    message: string
}
export type MyPostPropsType = {
    posts: Array<postsType>
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageData>
}

function App(props: MyPostPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/news'    render={() => <News/>}/>
                    <Route path='/music'   render={() => <Music/>}/>
                    <Route path='/setings' render={() => <Setings/>}/>

                </div>
                {/*   <Profile />*/}


            </div>
        </BrowserRouter>
    );
}

export default App;