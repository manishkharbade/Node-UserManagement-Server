import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ROUTES from './routes';
import LayoutView from '../CommonComponents/LayoutView';
import { LoaderComponent, PageNotFound } from '../CommonComponents';
import ProtectedRoute from './ProtectedRoute';

// Lazy load components
const Login = lazy(() => import('../Components/Login/Login'));
const Register = lazy(() => import('../Components/Login/Register'));
const Dashboard = lazy(() => import('../Components/Main/Dashboard'));
const Products = lazy(() => import('../Components/Main/Products'));
const Users = lazy(() => import('../Components/Main/Users'));

const AppRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));

    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(!!localStorage.getItem('accessToken'));
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <Suspense fallback={<LoaderComponent />}>
            <LayoutView>
                <Routes>
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    <Route path={ROUTES.REGISTER} element={<Register />} />
                    <Route
                        path="/"
                        element={isAuthenticated ? <Navigate to={ROUTES.DASHBOARD} /> : <Navigate to={ROUTES.LOGIN} />}
                    />
                    <Route
                        path={ROUTES.DASHBOARD}
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={ROUTES.USERS}
                        element={
                            <ProtectedRoute>
                                <Users />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={ROUTES.PRODUCTS}
                        element={
                            <ProtectedRoute>
                                <Products />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<PageNotFound />} /> {/* Catch-all route for 404 pages */}
                </Routes>
            </LayoutView>
        </Suspense>
    );
};

export default AppRoute;
