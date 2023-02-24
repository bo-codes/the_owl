import {createSlice, configureStore} from '@reduxjs/toolkit'


const postsSlice = createSlice({
    name: 'post',
    initialState: {},
    reducers: {
        addPost(state, action) {
            // key into the action to get our payload, and get our post we are passing through there
            state[action.payload.post.id] = action.payload.post
        },
        removePost(state, action) {
            delete state[action.postId]
        }
    }
})

const store = configureStore({
    reducer: {
        posts: postsSlice.reducer
    }
})

// store.dispatch({
//     type: 'post/addPost',
//     payload: 'New Post!!!'
// })

// store.dispatch(postsSlice.actions.addPost({id: 1, post: {content: 'New Post', createdAt: 'today', userId: '1'}}))


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

export { store };
