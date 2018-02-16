import faker from 'faker';
import * as appTypes from '../types/appTypes';
const INITIAL_STATE = {
  users: []
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.NEW_USER:
    return {
      ...state,
      users: [...state.users,
        {
        id: Date.now(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        text: faker.lorem.paragraph()
        }
        ]
      };
    default:
      return state;
  }
}
