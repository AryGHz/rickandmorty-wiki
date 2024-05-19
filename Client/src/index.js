import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter} from'react-router-dom'
import { Provider } from 'react-redux'
import './css/index.css'
import store from './redux/store.js'
import App from './App'
import {AuthProvider, AuthContext} from './context/authProvider.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <Provider store={store}>
    {/* <AuthProvider> */}
    <BrowserRouter>
        <App  />
     </BrowserRouter>
    {/* </AuthProvider>  */}
</Provider>
    </StrictMode>

);
