import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import nodesImage from '../assets/nodes.png';
import { navLinkData } from '../Constants';

const Sider = () => {
    const drawerWidth = 300;
    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box sx={{ padding: "1.5rem 2.4rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                    <img src={nodesImage} loading="eager|lazy" style={{ height: "2rem", width: "2rem" }} />
                    <Typography variant='h5' mt={"10px"}>User Port</Typography>
                </Box>
                <List sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingLeft: "1rem" }}>
                    {navLinkData?.map(({ id, title, link, icon }) => (
                        <ListItem key={id} disablePadding >
                            <ListItemButton component={Link} to={link}>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default Sider