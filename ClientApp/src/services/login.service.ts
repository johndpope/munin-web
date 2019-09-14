import axios from 'axios';
import Config from '../config';

class LoginService {

    static host = `${Config.API_HOSTNAME}/login`;

    static isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    static async logIn(password: string) {
        try {
            await axios.post<void>(LoginService.host, {username: '', password: password});
            localStorage.setItem('token', password);
            return Promise.resolve();
        }
        catch(e) {
            throw e;
        }
    }
}

export default LoginService;