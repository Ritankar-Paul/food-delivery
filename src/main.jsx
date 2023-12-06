import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import RestaurantMenu from './components/restaurantMenu/restaurantMenu'
import ContactUs from './components/body/ContactUs'
import Header from './components/header/Header'
import AboutUs from './components/body/AboutUs'
import appStore from './utils/redux/appStore'
import Error from './components/header/Error'
import Body from './components/body/Body'
import Cart from './components/body/Cart'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import React from 'react'
import './index.css'


const AppLayout = () => (
  <Provider store={appStore}>
    <Header />
    <Outlet />
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <ContactUs />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)

