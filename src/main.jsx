import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
// import BookDetails from './components/BookDetails/BookDetails';
import BooksDetails from './components/BooksDetails/BooksDetails';
import ReadBooks from './components/ReadBooks/ReadBooks';
import WishlistBooks from './components/WishlistBooks/WishlistBooks';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    errorElement: <ErrorPage></ErrorPage> ,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/books.json')
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: 'read-books',
            element: <ReadBooks></ReadBooks>
          },
          {
            path: 'wishlist-books',
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/book-details/:id',
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch(`/books.json`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>,
        loader: ()=> fetch(`/blogs.json`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
