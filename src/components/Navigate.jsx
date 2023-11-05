// Navbar.js
import * as React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Badge, Avatar, Paper, styled } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

const WhiteAppBar = styled(AppBar)({
    backgroundColor: 'white',
    boxShadow: 'none', // Remove box shadow
});

function Navbar() {
    return (
        <WhiteAppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Paper sx={{ display: 'flex', alignItems: 'center', padding: '2px', marginRight: '100px' }}>
                    <IconButton sx={{ p: '10px' }}>
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ flexGrow: 1 }}
                    />
                </Paper>
                <IconButton sx={{ marginRight: '50px' }} color="black">
                    <Badge badgeContent={3} color="error">
                        <NotificationAddIcon />
                    </Badge>
                </IconButton>
                <Avatar alt="Profile" src="/path-to-profile-image.jpg" />
            </Toolbar>
        </WhiteAppBar>
    );
}

export default Navbar;
