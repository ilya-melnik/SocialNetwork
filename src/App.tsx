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
import state, {RootStateType} from './redux/state';


type AppPropsType = {
    state: RootStateType
}


function App(props: AppPropsType) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} message={props.state.dialogsPage.message}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path='/news'    render={() => <News/>}/>
                    <Route path='/music'   render={() => <Music/>}/>
                    <Route path='/setings' render={() => <Setings/>}/>

                </div>
                {/*   <Profile />*/}


            </div>

    );
}

export default App;