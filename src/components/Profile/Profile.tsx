import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {PostsType} from "../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
}



const Profile = (props: PropsType) => {

    return (
        <div>
            <Profileinfo />
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;