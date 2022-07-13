import axios from 'axios';

// endpoint start=2022-01-05&end=2022-05-22


export const api = axios.create({
    baseURL: 'https://api.coindesk.com/v1/bpi/historical/close.json?'
})