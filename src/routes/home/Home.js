import React from 'react';
import { Box } from '@mui/material';

export default function Home() {
    return (
        <Box>
            <Box sx={{ p: 2 }}>
                이 페이지는 홈입니다.
                <br />
                로그인 한 유저의 피드와 종합적인 정보를 표시합니다.
            </Box>
        </Box>
    );
}
