import Post from "../components/Profile/MyPosts/Post/Post";
import React from "react";


export type PostsType = {
    id: number
    message: string
    likesCount: number

}

export type DialogsType = {
    avatar: string
    id: number
    name: string

}

export type MessageType = {
    id: number
    message: string
    isMine: boolean
}
export type FriendType = {
    id: number
    name: string
    img: string
}


export type ProfilePageType = {
    posts: Array<PostsType>


}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
}

export type SidebarPageType = {
    friends: Array<FriendType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarPageType

}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "hi, how are you", likesCount: 1},
            {id: 2, message: "My name is ilya", likesCount: 23},
            {id: 3, message: "I have girl", likesCount: 17},
            {id: 4, message: "hi-hi", likesCount: 12}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Nina", avatar: 'https://hair-man.ru/wp-content/uploads/2017/08/131.jpg'},
            {id: 2, name: "Violeta", avatar: 'https://hair-man.ru/wp-content/uploads/2017/08/131.jpg'},
            {id: 3, name: "Ruth", avatar: 'https://hair-man.ru/wp-content/uploads/2017/08/131.jpg'},
            {id: 4, name: "Sasha", avatar: 'https://hair-man.ru/wp-content/uploads/2017/08/131.jpg'},
            {id: 5, name: "Mikl", avatar: 'https://hair-man.ru/wp-content/uploads/2017/08/131.jpg'},
            {id: 6, name: "Pavel", avatar: 'https://hair-man.ru/wp-content/uploads/2017/08/131.jpg'}
        ],
        message: [
            {id: 1, message: "hi", isMine: true},
            {id: 2, message: "How are you", isMine: false},
            {id: 3, message: "Yesss", isMine: true},
            {id: 4, message: "Yesss", isMine: false},
            {id: 5, message: "Yesss", isMine: true},
            {id: 6, message: "No", isMine: false}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Nik', img: 'https://hair-man.ru/wp-content/uploads/2017/08/131.jpg'},
            {id: 2, name: 'Ilya', img: 'https://hair-man.ru/wp-content/uploads/2017/08/131.jpg'},
            {id: 3, name: 'Alex', img: 'https://hair-man.ru/wp-content/uploads/2017/08/131.jpg'},
        ]
    },
}

export let addPost = (newMessage: string) => {

    const newPost: PostsType = {
        id: 5, message: newMessage, likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}
export default state;