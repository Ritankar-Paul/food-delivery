import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Cart from './components/body/Cart'
import RestaurantMenu from './components/restaurantMenu/restaurantMenu'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/redux/appStore'


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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)

