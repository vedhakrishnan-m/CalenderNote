import { configureStore } from "@reduxjs/toolkit";
import personreducer from "../demo/personSlice";

export default configureStore({
  reducer: {
    person: personreducer,
  },
});
