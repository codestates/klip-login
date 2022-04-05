import React from 'react';
import { Box, Button } from '@mui/material';

export default function DIDApplicationButton() {
    return (
        <Box>
            <Button
                variant="contained"
                color="success"
                onClick={() =>
                    window.open(
                        ' https://forms.gle/JWy31Gt6nK3BRVjG8',
                        '_blank',
                    )
                }
            >
                발급 신청하기
            </Button>
        </Box>
    );
}
