    import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
    import counterReducer from "./counter/counterReducers";
    import usernameReducer from "./username/userReducer";
    import logger from "redux-logger"
    // import {thunk} from 'redux-thunk'
    import postsReducer from "./posts/postsReducer"
    import createSagaMiddleware from "redux-saga";
    import { watcherSaga } from "./sagas/rootSaga";

    const sagaMiddleware = createSagaMiddleware()
    const rootReducer = combineReducers({
        counterReducer,
        usernameReducer,
        postsReducer
    })
    const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))
    sagaMiddleware.run(watcherSaga)

    export default store;