import axios from 'axios';
import {getUserProfile} from "./authService";



export const getBasicInfo = async (data) => {
    try {
        const response = await axios.post("http://localhost:5000/api/users/getinfo", data);
        return response.data;

    } catch (error) {
        return error
    }

};

export const linkedUsers = async () => {
    const result = [];
    const userData = await getUserProfile();

        await Promise.all(
            userData.messagingUsers.map(async (user) => {
                const basicData = await getBasicInfo({ userName: user });
                    result.push(basicData);
            })
        );

    return result;
};

export const getMessages = async (userName) => {
    const data = {otherUserName:userName}
    try {
        const response = await axios.post("http://localhost:5000/api/message/getmessages", data);
        return response.data;

    } catch (error) {
        return error
    }

};

export const sendMessage = async (userName,text) => {
    const data = {otherUserName:userName,text:text}
    try {
        const response = await axios.post("http://localhost:5000/api/message/sendmessage", data);
        return response.data;

    } catch (error) {
        return error
    }

};
