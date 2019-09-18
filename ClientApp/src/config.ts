class Config {
    static API_HOSTNAME = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : 'https://localhost:5001';
}

export default Config;

