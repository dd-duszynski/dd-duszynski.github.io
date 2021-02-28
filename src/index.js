import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './scss/main.scss';
import * as serviceWorker from './serviceWorker';

const localStorageLang = localStorage.getItem('lang');
const browserLanguage = window.navigator.userLanguage || window.navigator.language;
const browserLanguageShort = browserLanguage.substring(0, 2).toUpperCase();
const browserlang = browserLanguageShort === "PL" ? "PL" : "EN";
const appLanguage = localStorageLang !== null ? localStorageLang : browserlang;

ReactDOM.render(
   <React.StrictMode>
      <App lang={appLanguage} />
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


