import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type postsType = {
    id: number
    message: string
    likesCount: number
}
type MyPostPropsType = {
    posts: Array<postsType>
}

const MyPosts = (props: MyPostPropsType) => {

    let postsElemens =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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