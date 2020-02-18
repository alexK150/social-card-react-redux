import {CardActionTypes} from './card.types';

const initialState = {
    id: null,
    status: 'I am a very simple card. I am good at containing small bits of information.',
    likes: 0,
    dislikes: 0,
    shares: 0,
    comments: []
};

export const CardReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CardActionTypes.GET_DATA: {
            return {
                ...state,
                card: action.payload
            }
        }
        default:
            return state
    }
};