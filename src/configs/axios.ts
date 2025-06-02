import Axios from 'axios';

export const api = Axios.create({
    baseURL: process.env.VITE_API_URL || 'http://localhost:9000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
})