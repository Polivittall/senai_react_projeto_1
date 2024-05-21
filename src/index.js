import React from 'react';
import FontAwesome from 'react-fontawesome'
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
import Login from './pages/login';
import MoviePage from './pages/MoviePage';
import BookPage from './pages/BookPage';






const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home/>
  },

  {
    path: "/Livros",
    element: <BookPage/>
  },
  
  {
    path: "/Login",
    element: <Login/>
  },

  {
    path: "/Filmes",
    element: <MoviePage/>
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