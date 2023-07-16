import axios from 'axios';
import { SERVER_URL } from '../assets/constants';
export const API=axios.create({
    baseURL:SERVER_URL
});