import Post from "../components/Profile/MyPosts/Post/Post";
import React from "react";

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type DialogsType = {
    id: number
    name: string

}

type MessageType = {
    id: number
    message: string
}

type SidebarType = {

}

type ProfilePageType = {
    posts: Array<PostsType>
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
let state = {
    profilePage: {
        posts: [
            {id: 1, message: "hi, how are you", likesCount: 1},
            {id: 2, message: "My name is ilya", likesCount: 23},
            {id: 3, message: "I have girl",      likesCount: 17},
            {id: 4, message: "hi-hi",            likesCount: 12}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Nina"},
            {id: 1, name: "Violeta"},
            {id: 1, name: "Ruth"},
            {id: 1, name: "Sasha"},
            {id: 1, name: "Mikl"},
            {id: 1, name: "Pavel"}
        ],
        message: [
            {id: 1, message: "hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yesss"},
            {id: 4, message: "Yesss"},
            {id: 5, message: "Yesss"}
        ]
    },
    sidebar: {}
}
export default state;