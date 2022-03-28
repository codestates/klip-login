import React from 'react';
import { Box } from '@mui/material';

import KlipLoginButton from '../../components/KlipLoginButton';

export default function Home() {
    return (
        <Box>
            <Box sx={{ p: 2 }}>이 페이지는 홈입니다.</Box>
            <KlipLoginButton url="http://naver.com" />
        </Box>
    );
}
