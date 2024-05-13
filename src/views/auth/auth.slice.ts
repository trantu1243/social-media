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
    notifications: Number[];
    check_notification: boolean
}

interface Auth {
    isLogin: boolean;
    data: {
        token: string;
        user: User
    }
    
}

const initialState: Auth = {
    isLogin: false,
    data: {
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
            shareid: [],
            notifications: [],
            check_notification: false
        },
        token: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.data = action.payload;
            state.isLogin = true;
            console.log(state.data);
            localStorage.setItem("token", state.data.token);
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state = initialState;
        }
    },
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer