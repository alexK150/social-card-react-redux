import axios from 'axios';

import {CardActionTypes} from './card.types';

export const getData = () => async dispatch => {
    try {
        debugger
        const res = await axios.get('/posts');

        dispatch({
            type: CardActionTypes.GET_DATA,
            payload: res.data[0]
        })

    } catch (err) {
        console.log(err.message)
    }
};