import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Cybersecurity Awareness
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/security">Security</Button>
                <Button color="inherit" component={Link} to="/lookup">Lookup</Button>
                <Button color="inherit" component={Link} to="/about">Find out more</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;