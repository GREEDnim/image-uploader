import axios from 'axios';

export const API=axios.create({
    baseURL:"https://image-server-spik.onrender.com/"
});