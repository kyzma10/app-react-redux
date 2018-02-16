import faker from 'faker';
import * as appTypes from '../types/appTypes';
const INITIAL_STATE = {
  users: []
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.NEW_USER:
      const newItem = {
        id: Date.now(),
        name: faker.internet.userName(),
        email: ''
      };
      return {
        ...state,
        users: [...state.users, newItem]
      };
    default:
      return state;
  }
}
