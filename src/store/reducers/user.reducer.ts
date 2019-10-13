import { UserState, USER_INITIAL_STATE } from '../models/user.model';
import { UserActionTypes } from '../models';

export default (
  state: UserState = USER_INITIAL_STATE,
  action: { type: UserActionTypes; payload?: any },
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_AUTH:
      return { ...state, isAuthed: action.payload };
    default:
      return state;
  }
};
