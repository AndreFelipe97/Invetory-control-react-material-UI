import axios from 'axios';

import { rota } from './env';


export default axios.create({
    baseURL: rota
});