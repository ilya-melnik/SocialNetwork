import React from 'react';
import './App.css';
import Technologies from './Technologies'
import Header from "./Header";

function App() {
    return (
        <div className="app-wrapper">

            <header className={'header'}>
                <img src={"https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg"}/>
                {/*<Header/>*/}
            </header>
            <nav className={'nav'}>
                <div>
                    <a href={'#g'}>Profile</a>
                </div>

                <div>
                    <a href={'#g'}>Massage</a>
                </div>
                <div>
                    <a href={'#g'}>News</a>
                </div>
                <div>
                    <a href={'#g'}>Music</a>
                </div>
                <div>
                    <a href={'#g'}>Settings</a>
                </div>


            </nav>
            <div className={'content'}>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2017/09/02/11/04/adult-education-2706977_1280.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                    <img src="https://cdn.pixabay.com/photo/2018/05/21/23/31/education-3420031_1280.png" alt=""/>
                </div>

                <div>
                    My posts
                    <div> New post</div>
                </div>

                <div>post 1</div>
                <div>post 2 </div>
                <div>post 3</div>
            </div>


            {/*<Technologies />*/}
        </div>
    );
}


export default App;
