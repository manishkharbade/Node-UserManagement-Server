import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import PageNotFoundImg from '../assets/404.png';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    const handleGoToHome = () => {
        navigate('/');
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={PageNotFoundImg} />
            <Typography variant="h5" color="initial" mb={1}>Ooops, page not found...!</Typography>
            <Typography variant="body1" color="initial">Something went wrong.</Typography>

            <Button variant="outlined" color="primary" sx={{ marginTop: '1rem', borderRadius: '1.5rem' }} onClick={handleGoToHome}>
                Back to Home
            </Button>
        </Box>
    )
}

export default PageNotFound