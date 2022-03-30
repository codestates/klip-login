import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRoutes from './AppRoutes';

function App() {
    return (
        <RecoilRoot>
            <AppRoutes />
        </RecoilRoot>
    );
}

export default App;
