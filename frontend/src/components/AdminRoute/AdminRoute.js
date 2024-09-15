import React from 'react'
import NotFound from '../NotFound/NotFound';
import { useAuth } from '../../hooks/useAuth';
import AuthRoute from '../AuthRoute/AuthRoute';

function AdminRoute({children}) {
    const {user} = useAuth();
  return user.isAdmin? (
    children ):(
    <NotFound
    linkRoute="/dashboard"
    linkText="Go to Dashboard"
    messege="You don't have access to this page"
    />
  );
}

const AdminRouteExport = ({ children}) => (
    <AuthRoute>
        <AdminRoute>{children}</AdminRoute>
    </AuthRoute>
);

export default AdminRouteExport;