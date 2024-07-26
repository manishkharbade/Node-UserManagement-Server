import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoaderComponent, PageNotFound } from '../CommonComponents';
import LayoutView from '../CommonComponents/LayoutView';
import ProtectedRoute from './ProtectedRoute';
import ROUTES from './routes';

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
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
                <Route
                    path="/"
                    element={
                        isAuthenticated ? (
                            <LayoutView>
                                <Navigate to={ROUTES.DASHBOARD} replace />
                            </LayoutView>
                        ) : (
                            <Navigate to={ROUTES.LOGIN} replace />
                        )
                    }
                />
                <Route
                    path={ROUTES.DASHBOARD}
                    element={
                        <ProtectedRoute>
                            <LayoutView>
                                <Dashboard />
                            </LayoutView>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={ROUTES.USERS}
                    element={
                        <ProtectedRoute>
                            <LayoutView>
                                <Users />
                            </LayoutView>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={ROUTES.PRODUCTS}
                    element={
                        <ProtectedRoute>
                            <LayoutView>
                                <Products />
                            </LayoutView>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<PageNotFound />} /> {/* Catch-all route for 404 pages */}
            </Routes>
        </Suspense>
    );
};

export default AppRoute;
