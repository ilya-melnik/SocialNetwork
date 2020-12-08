import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

const MyPosts = (props: ProfilePageType) => {

    let postsElemens =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElements = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newPostElements.current
        alert(text?.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElements }></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>


            <div className={s.posts}>
                {postsElemens}
            </div>
        </div>
    );
}

export default MyPosts;