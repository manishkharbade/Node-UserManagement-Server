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
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Sider sx={{ width: '250px', flexShrink: 1 }} />
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ flexGrow: 1, padding: '24px', backgroundColor: '#fff' }}>
                        {children}
                    </Box>
                    <Divider sx={{ background: "#E5E4E2" }} />
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
};

export default LayoutView;
