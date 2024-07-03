import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./service/api.service";

const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});

export default store;
