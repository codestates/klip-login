import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import KlipLoginDialog from '@components/KlipLoginDialog';

export default function LoginButton() {
    const [klipOpen, setKlipOpen] = useState(false);
    function handleWalletOpen(wallet) {
        switch (wallet) {
            case 'klip':
                setKlipOpen(true);
                break;
            default:
                break;
        }
    }

    function handleWalletClose(wallet) {
        switch (wallet) {
            case 'klip':
                setKlipOpen(false);
                break;
            default:
                break;
        }
    }
    return (
        <Box>
            <Button
                variant="contained"
                onClick={() => handleWalletOpen('klip')}
            >
                지갑 로그인
            </Button>
            <KlipLoginDialog
                open={klipOpen}
                onClose={() => handleWalletClose('klip')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            />
        </Box>
    );
}
