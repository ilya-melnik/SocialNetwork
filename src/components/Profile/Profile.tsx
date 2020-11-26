import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";


type postsType = {
    id: number
    message: string
    likesCount: number
}
type MyPostPropsType = {
    posts: Array<postsType>
}

const Profile = (props: MyPostPropsType) => {

    return (
        <div>
            <Profileinfo />
            <MyPosts posts={props.posts} />
        </div>
    );
}

export default Profile;