import { createSlice } from '@reduxjs/toolkit';

interface User {
    id: Number;
    username: string;
    name: string;
    avatar: string;
    background: string;
    postid: Number[];
    followerid: Number[];
    followingid: Number[];
    likeid: Number[];
    commentid: Number[];
    shareid: Number[];
}

interface Auth {
    token: string;
    user: User
}

const initialState: Auth = {
    user: {
        id: 0,
        username: '',
        name: '',
        avatar: '',
        background: '',
        postid: [],
        followerid: [],
        followingid: [],
        likeid: [],
        commentid: [],
        shareid: []
    },
    token: ''    
}

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    
    },
})

export default counterSlice.reducer