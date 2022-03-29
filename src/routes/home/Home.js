import React from 'react';
import { Box } from '@mui/material';

import LoginButton from '@components/LoginButton';

export default function Home() {
    return (
        <Box>
            <Box sx={{ p: 2 }}>이 페이지는 홈입니다.</Box>
            <LoginButton />
        </Box>
    );
}
