import React from 'react';
import s from './Post.module.css';
import {PostsType} from "../../../../redux/state";


const Post = (props: PostsType) => {
    return (

                <div className={s.item}>
                    < img src="https://hair-man.ru/wp-content/uploads/2017/08/131.jpg"/>
                    {props.message}
                    <div>
                        <span>like</span> {props.likesCount}
                    </div>
                </div>

    );
}

export default Post;