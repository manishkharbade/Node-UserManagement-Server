import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoaderComponent } from '../../CommonComponents';
const Header = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoading(true);
        localStorage.clear();
        sessionStorage.clear();
        setTimeout(() => {
            setLoading(false);
            navigate('/login');
        }, 1000);
    }

    return (
        <>
            <AppBar position="static" sx={{ background: "#fff", color: "red", height: "4.5rem" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: "flex", justifyContent: "end" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: '1rem', marginRight: "1rem" }}>
                            <Avatar sx={{ width: "2rem", height: "2rem", cursor: "pointer" }} />
                            <LogoutIcon sx={{ color: "#525252", cursor: "pointer" }} onClick={handleLogout} />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {loading && <LoaderComponent />}
        </>
    )
}

export default Header