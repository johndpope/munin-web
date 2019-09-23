import axios, { AxiosRequestConfig } from 'axios';
import Config from '../config';
import authService from '../auth/AuthorizeService';

class ApiService {

    static host = Config.API_HOSTNAME;

    static async get<T>(path: string) {
        try {
            const config = await this.GetAxiosConfiguration();
            return Promise.resolve((await axios.get<T>(`${this.host}/${path}`, config)).data);
        }
        catch(e) {
            throw e;
        }
    }

    static async post<T>(path: string, body?: object) {
        try {
            const config = await this.GetAxiosConfiguration();
            return Promise.resolve((await axios.post<T>(`${this.host}/${path}`, body, config)).data);
        }
        catch(e) {
            throw e;
        }
    }

    static async put<T>(path: string, body?: object) {
        try {
            const config = await this.GetAxiosConfiguration();
            return Promise.resolve((await axios.put<T>(`${this.host}/${path}`, body, config)).data);
        }
        catch(e) {
            throw e;
        }
    }

    private static async GetAxiosConfiguration () : Promise<AxiosRequestConfig> {
        const token = await authService.getAccessToken();
        const config : AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return config;
    }
}

export default ApiService;