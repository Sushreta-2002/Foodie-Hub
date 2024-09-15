import React from 'react';
import {Route,Routes} from 'react-router-dom';
import HomePage from './pages/Home/HomePage.js';
import FoodPage from './pages/Food/FoodPage.js';
import CartPage from './pages/Cart/CartPage.js';
import LoginPage from './pages/Login/LoginPage.js';
import RegisterPage from './pages/Register/RegisterPage.js';
import AuthRoute from './components/AuthRoute/AuthRoute.js';
import CheckoutPage from './pages/Checkout/CheckoutPage.js';
import PaymentPage from './pages/Payment/PaymentPage.js';
import OrderTrackPage from './pages/OrderTrack/OrderTrackPage.js';
import ProfilePage from './pages/Profile/ProfilePage.js';
import OrdersPage from './pages/Orders/OrdersPage.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import FoodsAdminPage from './pages/FoodsAdmin/FoodsAdminPage.js';
import AdminRoute from './components/AdminRoute/AdminRoute.js'
import FoodEditPage from './pages/FoodEdit/FoodEditPage.js';
import UsersPage from './pages/UsersPage/UsersPage.js';
import UserEditPage from './pages/UserEdit/UserEditPage.js';
export default function AppRoutes() {
  return(
     <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/search/:searchTerm" element={<HomePage/>} />
    <Route path="/tag/:tag" element={<HomePage/>} />
    <Route path="/food/:id" element={<FoodPage/>} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>} />
    <Route path="/checkout" element=
    {<AuthRoute>
      <CheckoutPage />
      </AuthRoute>
    } />
    <Route path="/payment" element=
    {<AuthRoute>
      <PaymentPage />
      </AuthRoute>
    } />
    <Route path="/track/:orderId" element=
    {<AuthRoute>
      <OrderTrackPage />
      </AuthRoute>
    } />
    <Route path="/profile" element=
    {<AuthRoute>
      <ProfilePage />
      </AuthRoute>
    } />
    <Route path="/orders/:filter?" element=
    {<AuthRoute>
      <OrdersPage />
      </AuthRoute>
    } />
    <Route path="/dashboard" element=
    {<AuthRoute>
      <Dashboard />
      </AuthRoute>
    } />
     <Route path="/admin/foods/:searchTerm?" element=
    {<AdminRoute>
      <FoodsAdminPage />
      </AdminRoute>
    } />
    <Route path="/admin/addFood" element=
    {<AdminRoute>
      <FoodEditPage />
      </AdminRoute>
    } />
    <Route path="/admin/editFood/:foodId" element=
    {<AdminRoute>
      <FoodEditPage />
      </AdminRoute>
    } />
    <Route path="/admin/users/:searchTerm?" element=
    {<AdminRoute>
      <UsersPage />
      </AdminRoute>
    } />
    <Route path="/admin/editUser/:userId" element=
    {<AdminRoute>
      <UserEditPage />
      </AdminRoute>
    } />
    
  </Routes>
  );
}
