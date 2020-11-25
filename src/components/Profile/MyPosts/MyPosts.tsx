import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {
    const postData = [
        {id: 1, message: "hi, how are you", likesCount: 13},
        {id: 2, message: "My name is ilya", likesCount:3 },
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>


            <div className={s.posts}>

                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;