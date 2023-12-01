import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { extendedApiSlice } from "./features/posts/postsSlice";
import { usersApiSlice } from "./features/users/usersSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
