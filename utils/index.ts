import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const createOrGetUser = async (response: any, addUser: any) => {
    // Google login JWT decoded
    const decoded: { name: string, picture: string, sub: string } = jwtDecode(response.credential);

    const { name, picture, sub } = decoded;
     
    // Create a user object to send to NextJS api/auth route
    const user = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture
    };

    addUser(user)

    // Make a POST request to NextJS API route containing the user details
    await axios.post(`http://localhost:3000/api/auth`, user);
};