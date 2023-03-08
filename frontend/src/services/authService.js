import axios from 'axios';

export async function loginUser(data) {
    try {
        const response = await axios.post("http://localhost:5000/api/users/login", data);
        return response.data;
    } catch (error) {
       return error
    }
}
export const getLoginStatus = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/users/loggedin");
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getUserProfile = async  () =>{
    try {
        const response = await axios.get("http://localhost:5000/api/users/getuser");
        return response.data;
    } catch (error) {
        return error;
    }
}

