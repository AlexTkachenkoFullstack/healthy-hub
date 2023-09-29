import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
          <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);

// basename="/healthy-hub"

// "homepage": "https://AlexTkachenkoFullstack.github.io/healthy-hub/",