import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
});
