import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    const posts = [
        {id: 1, message: "hi, how are you", likesCount: 13},
        {id: 2, message: "My name is ilya", likesCount: 3},
    ]
    let postsElemens =
        posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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
                {postsElemens}
            </div>
        </div>
    );
}

export default MyPosts;