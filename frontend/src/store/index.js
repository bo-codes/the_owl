import { configureStore } from "@reduxjs/toolkit";
import { postsReducer, addPost, removePost } from "./Slices/postsSlice";
import { usersReducer, addUser, removeUser } from "./Slices/usersSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

export { store, addPost, addUser, removePost, removeUser, reset };

// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import sessionReducer from "./session";

// const rootReducer = combineReducers({
//     session: sessionReducer,
// });

// let enhancer;

// if (process.env.NODE_ENV === "production") {
//     enhancer = applyMiddleware(thunk);
// } else {
//     const logger = require("redux-logger").default;
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     enhancer = composeEnhancers(applyMiddleware(thunk, logger));
// }

// const configureStore = preloadedState => {
//     return createStore(rootReducer, preloadedState, enhancer);
// };

// export default configureStore;
