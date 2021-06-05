import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import users from "./users";

export default configureStore({
  reducer: users,
  middleware: [api],
});
