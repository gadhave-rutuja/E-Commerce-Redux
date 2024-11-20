import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import 'remixicon/fonts/remixicon.css'

import { BrowserRouter } from 'react-router-dom'
import store from './redux/Store.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer
    theme="dark"
    position="top-right"
    autoClose={3000}
    closeOnClick
    pauseOnHover ={false}
    transition: Bounce
/>
{/* <ToastContainer /> */}
        <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
