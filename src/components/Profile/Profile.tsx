import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {PostsType} from "../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPost: (newMessage: string) => void
}



const Profile = (props: PropsType) => {

    return (
        <div>
            <Profileinfo />
            <MyPosts posts={props.posts} addPost={props.addPost} />
        </div>
    );
}

export default Profile;