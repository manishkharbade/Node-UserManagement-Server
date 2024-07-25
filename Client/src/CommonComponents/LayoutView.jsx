import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { Footer, Header } from '../Components/Main';
import Sider from './Sider';

const LayoutView = ({ children }) => {
    const [showLayout, setShowLayout] = useState(false);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        if (accessToken) {
            setShowLayout(true);
        }
    }, [accessToken]);

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'row' }}>
            {showLayout && (
                <>
                    <Sider />
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Header />
                        <Divider sx={{ boxShadow: 3, background: "#E5E4E2" }} />
                        <Box sx={{ backgroundColor: '#fff', padding: '24px', margin: 0, flexGrow: 1 }}>
                            {children}
                        </Box>
                        <Divider sx={{ background: "#E5E4E2" }} />
                        <Footer />
                    </Box>
                </>
            )}
            {!showLayout && children}
        </Box>
    );
};

export default LayoutView;