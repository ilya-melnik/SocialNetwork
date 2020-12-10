import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPost: (newMessage: string) => void
}

const MyPosts = (props: PropsType) => {

    let postsElemens =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElements = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {

        let text = newPostElements.current?.value
        if(text) {
            props.addPost(text)
        }
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