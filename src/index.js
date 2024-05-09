import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import NavBarComponent from './components/NavBarComponents';
import Home from './pages/home';
import Book from './pages/book';
import Login from './pages/login';
import Movie from './pages/movie';

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home/>
  },

  {
    path: "/Book",
    element: <Book/>
  },
  
  {
    path: "/Login",
    element: <Login/>
  },

  {
    path: "/Movie",
    element: <Movie/>
  }


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarComponent />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();