// Your entire application's state. A central state of truth for redux.
import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({ //calling the configureStore as a function.
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer, //conneting the api to the store via reducer.
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
