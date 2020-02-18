import axios from 'axios';

import {CardActionTypes} from './card.types';

export const getData = () => dispatch => {
    try {
        const data = axios.get('/posts');

        dispatch({
            type: CardActionTypes.GET_DATA,
            payload: data
        })
    } catch (err) {
        console.log(err.message)
    }
};