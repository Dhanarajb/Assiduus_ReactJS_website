// Sidebar.js
import * as React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import ReportIcon from '@mui/icons-material/Report';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

function Sidebar() {
    return (
        <Drawer variant="permanent" anchor="left">
            <List>
                <img style={{ height: '40px', width: '200px', margin: '10px', marginBottom: '60px' }} src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png" alt="" />
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit', backgroundColor: "#55BC55" }}>
                    <ListItem button selected={useMatch('/dashboard')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </Link>
                <Link to="/accounts" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button selected={useMatch('/accounts')}>
                        <ListItemIcon>
                            <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Accounts" />
                    </ListItem>
                </Link>
                <Link to="/payrolls" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button selected={useMatch('/payrolls')}>
                        <ListItemIcon>
                            <PaymentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Payrolls" />
                    </ListItem>
                </Link>
                <Link to="/reports" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button selected={useMatch('/reports')}>
                        <ListItemIcon>
                            <ReportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItem>
                </Link>
                <Link to="/adviser" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button selected={useMatch('/adviser')}>
                        <ListItemIcon>
                            <FeaturedVideoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Adviser" />
                    </ListItem>
                </Link>
                <Link to="/contacts" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button selected={useMatch('/contacts')}>
                        <ListItemIcon>
                            <ContactEmergencyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
}

export default Sidebar;
