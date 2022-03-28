import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export default function KlipLoginButton({ url }) {
    function handleClick() {
        console.log('테스트');
        window.open(url, '_blank');
    }
    return (
        <Button variant="contained" onClick={() => handleClick()}>
            Klip 로그인
        </Button>
    );
}

KlipLoginButton.propTypes = {
    url: PropTypes.node.isRequired,
};
