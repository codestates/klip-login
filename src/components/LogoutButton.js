import React from 'react';
import { Box, Button } from '@mui/material';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '@recoil/user';

export default function LogoutButton() {
    const user = useRecoilValue(userState);
    const resetUser = useResetRecoilState(userState);

    function handleClick() {
        if (user.address.length > 0) {
            resetUser();
        } else alert('alreadyLoggedOut');
    }
    return (
        <Box>
            <Button
                variant="contained"
                color="error"
                onClick={() => handleClick()}
            >
                로그아웃
            </Button>
        </Box>
    );
}
