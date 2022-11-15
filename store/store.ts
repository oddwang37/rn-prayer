import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {logout} from './ducks/auth/slices';
import {
  Middleware,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

import rootReducer from './ducks';

export const errorMiddlware: Middleware =
  (api: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: any): AnyAction => {
    if (isRejectedWithValue(action)) {
      if (action.payload.status === 401) {
        logout();
      }
    }

    return next(action);
  };

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
