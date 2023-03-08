import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: {
            _id:"",
            name: "",
            userName: "",
            email: "",
            gender: "",
            privateAccount: false,
            ppLink: "",
            bio:"",
            followersId: [],
            followingId: [],
            messagingUsers: [],
            followingRequest: []
        }
    },
    reducers: {
        SET_USER(state, action) {
            const profile = action.payload;
            state.user._id = profile._id
            state.user.name = profile.name;
            state.user.userName = profile.userName;
            state.user.email = profile.email;
            state.user.gender = profile.gender;
            state.user.bio = profile.bio;
            state.user.privateAccount = profile.privateAccount;
            state.user.ppLink = profile.ppLink;
            state.user.followersId = profile.followersId;
            state.user.followingId = profile.followingId;
            state.user.messagingUsers = profile.messagingUsers;
            state.user.followingRequest = profile.followingRequest;
        },
        SET_LOGIN(state,action){
            state.isLoggedIn = action.payload;
        }
    },
});

export const { SET_USER, SET_LOGIN} = authSlice.actions;

// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;