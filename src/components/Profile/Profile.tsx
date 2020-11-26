import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {ProfilePageType} from "../../redux/state";





const Profile = (props: ProfilePageType) => {

    return (
        <div>
            <Profileinfo />
            <MyPosts posts={props.posts} />
        </div>
    );
}

export default Profile;