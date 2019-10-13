import { UserActionTypes } from '../models';

export const setAuthed = (status: boolean) => ({
  type: UserActionTypes.SET_AUTH,
  payload: true,
});
