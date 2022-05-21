import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import userReducer, { logout } from '../features/user/userSlice';
import noneReducer from '../features/none/noneSlice';
import { queryClient } from '..';

const combinedReducer = combineReducers({
  user: userReducer,
  none: noneReducer,
});

const getRootReducer = (state: any, action: any) => {
  if (action.type === logout.fulfilled.toString()) {
    state = undefined;
    queryClient.removeQueries();
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: getRootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
