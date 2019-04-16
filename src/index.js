import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {getFirestore, reduxFirestore} from "redux-firestore";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./store/reducers/rootReducer";
import fbConfig from "./config/fbConfig";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {attachAuthIsReady: true, useFirestoreForProfile: true, userProfile: 'users'})
));

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
});
