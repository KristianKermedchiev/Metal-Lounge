import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BulgarianBands from './Views/BulgarianBands.tsx'
import OtherBands from './Views/OtherBands.tsx'
import Login from './Views/Login.tsx'
import Register from './Views/Register.tsx'
import Layout from './Views/Layout.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/bulgarian-bands" />} />
                <Route path="/bulgarian-bands" element={<BulgarianBands />} />
                <Route path="/other-bands" element={<OtherBands />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
