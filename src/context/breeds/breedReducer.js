import {LIST_BREEDS, TO_SELECT_BREED, CLEAN_BREED} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case LIST_BREEDS:
      return {...state, breeds: action.payload};
    case TO_SELECT_BREED:
      return {...state, breed: action.payload};
    case CLEAN_BREED:
      return {...state, breed: null};
    default:
      return state;
  }
};
