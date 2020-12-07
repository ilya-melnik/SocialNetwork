import Post from "../components/Profile/MyPosts/Post/Post";
import React from "react";



export type PostsType = {
   // id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string

}

export type MessageType = {
    id: number
    message: string
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
            {/*id: 1,*/ message: "hi, how are you", likesCount: 1},
            {/*id: 2,*/ message: "My name is ilya", likesCount: 23},
            {/*id: 3, */message: "I have girl",      likesCount: 17},
            {/*id: 4,*/ message: "hi-hi",            likesCount: 12}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Nina"},
            {id: 2, name: "Violeta"},
            {id: 3, name: "Ruth"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Mikl"},
            {id: 6, name: "Pavel"}
        ],
        message: [
            {id: 1, message: "hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yesss"},
            {id: 4, message: "Yesss"},
            {id: 5, message: "Yesss"},
            {id: 6, message: "No"}
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
export default state;