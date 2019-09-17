class Config {
    static API_HOSTNAME = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : 'http://localhost:5000';
}

export default Config;
