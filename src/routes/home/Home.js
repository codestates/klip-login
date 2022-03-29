import React, { useState } from 'react';
import { Box } from '@mui/material';

import LoginButton from '@components/LoginButton';

export default function Home() {
    const [address, setAddress] = useState(''); // 추후 전역으로 상태 관리 예정

    return (
        <Box>
            <Box sx={{ p: 2 }}>이 페이지는 홈입니다.</Box>
            <LoginButton setAddress={setAddress} />
            {address.length > 0 ? (
                <Box sx={{ p: 2 }}>지갑 주소는 {address} 입니다.</Box>
            ) : (
                <Box sx={{ p: 2 }}>지갑 주소가 없습니다.</Box>
            )}
        </Box>
    );
}
