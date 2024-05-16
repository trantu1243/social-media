import { createSlice } from '@reduxjs/toolkit';

export interface User {
    id: Number;
    name: string;
    about: string;
    avatar: string;
    background: string;
    postid: Number[];
    followerid: Number[];
    followingid: Number[];
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
            name: '',
            about: '',
            avatar: '',
            background: '',
            postid: [],
            followerid: [],
            followingid: []
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
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state = initialState;
        }
    },
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer