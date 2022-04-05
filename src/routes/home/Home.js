import React from 'react';
import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userState } from '@recoil/user';
import LoginButton from '@components/LoginButton';
import LogoutButton from '@components/LogoutButton';

export default function Home() {
    const user = useRecoilValue(userState);

    return (
        <Box>
            <Box sx={{ p: 2 }}>이 페이지는 홈입니다.</Box>
            {user.address.length > 0 ? (
                <Box sx={{ p: 2 }}>
                    <LogoutButton />
                    지갑 주소는 {user.address} 입니다.
                </Box>
            ) : (
                <Box sx={{ p: 2 }}>
                    <LoginButton />
                    지갑 주소가 없습니다.
                </Box>
            )}
        </Box>
    );
}
