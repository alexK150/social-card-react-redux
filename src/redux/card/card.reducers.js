import {CardActionTypes} from './card.types';

const initialState = {
    card: {
        id: null,
        status: 'test',
        likes: 0,
        dislikes: 0,
        shares: 0,
        comments: [{"id": 1, "commentText": "test 1"}, {"id": 2, "commentText": "test 2"}]
    }
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