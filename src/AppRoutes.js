import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Home
import Home from '@routes/home/Home';

export default function AppRoutes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
