import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {
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

                <Post message="hi, how are you" likesCount={1}/>
                <Post message="My name is ilya" likesCount={23}/>
                <Post message="I have girl" likesCount={17}/>
            </div>
        </div>
    );
}

export default MyPosts;