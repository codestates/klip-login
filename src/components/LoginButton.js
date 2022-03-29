import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import KlipLoginDialog from '@components/KlipLoginDialog';

export default function LoginButton({ setAddress }) {
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
                setAddress={setAddress}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            />
        </Box>
    );
}

LoginButton.propTypes = {
    setAddress: PropTypes.func.isRequired,
};
