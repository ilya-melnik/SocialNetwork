import React, {useState} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: PropsType) => {

    let newPostElements = React.createRef<HTMLTextAreaElement>();

    let postsElemens =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        let text = newPostElements.current?.value
        if(text) {
            props.updateNewPostText(text)
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>

                    <textarea onChange={onPostChange} ref={newPostElements}></textarea>
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