import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BulgarianBands from './Views/BulgarianBands.tsx';
import OtherBands from './Views/OtherBands.tsx';
import Login from './Views/Login.tsx';
import Register from './Views/Register.tsx';
import Layout from './Views/Layout.tsx';
import AuthLayout from './Views/AuthLayout.tsx';
import ProtectedRoute from './Components/ProtectedRoute.tsx';
import { AuthProvider } from './Context/authContext.tsx';
import './db/firebase.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MyReviews from "./Views/MyReviews.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<ProtectedRoute />}>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Navigate to="/bulgarian-bands" />} />
                        <Route path="/bulgarian-bands" element={<BulgarianBands />} />
                        <Route path="/other-bands" element={<OtherBands />} />
                        <Route path="/my-reviews" element={<MyReviews />} />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);