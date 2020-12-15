import React from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setings from "./components/Setings/Setings";
import {RootStateType} from './redux/state';
import Friands from "./components/Friands/Friends";


type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addPostMess: () => void
    updateNewMessPostText: (newMessText: string) => void

}


function App(props: AppPropsType) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  message={props.state.dialogsPage.message}
                                                                  addPostMess={props.addPostMess}
                                                                  updateNewMessPostText={props.updateNewMessPostText}


                    />}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}

                    />}/>

                    <Route path='/news'    render={() => <News/>}/>
                    <Route path='/music'   render={() => <Music/>}/>
                    <Route path='/setings' render={() => <Setings/>}/>
                    <Route path='/friands' render={() => <Friands friends={props.state.sidebar.friends}/>}/>



                </div>
                {/*   <Profile />*/}


            </div>

    );
}

export default App;