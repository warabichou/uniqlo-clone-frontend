import axios from 'axios';

// 開発環境用
// const BASE_URL: string = 'http://localhost:3000/api/v1';

// 本番環境用
const BASE_URL: string = 'https://uniqlo-clone-backend.onrender.com/api/v1';

export const axiosClient = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 30000,
});
