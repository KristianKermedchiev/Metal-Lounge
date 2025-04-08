import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import React from 'react';

interface ProtectedRouteProps {
    children?: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { currentUser, loading } = useAuth();

    if (loading) {
        // You can replace this with a loading spinner/component
        return <div>Loading...</div>;
    }

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return children ? <>{children}</> : <Outlet />;
}