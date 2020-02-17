import {CardActionTypes} from './card.types';

const initialState = {
    id: null,
    likes: 0,
    dislikes: 0,
    shares: 0,
    comments: []
};

export const CardReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CardActionTypes.TOGGLE_LIKE: {

        }
    }
};