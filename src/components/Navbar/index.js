import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

import CustomDrawer from './CustomDrawer';

const Navbar = () => {
  const machineTypes = useSelector((state) => state.machineTypes);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = useCallback(() => setMobileOpen((prev) => !prev), []);

  const activeNavLink = { textDecoration: 'underline' };
  const normalNavLink = { textDecoration: 'none' };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar>
            <Box>
              <IconButton
                size="large"
                onClick={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' } }}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ color: 'white' }}
                component={NavLink}
                to="/"
                style={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}
                end>
                <Typography>All</Typography>
              </Button>
              {machineTypes.map((machineType, index) => (
                <Button
                  key={machineType.id}
                  sx={{ color: 'white' }}
                  component={NavLink}
                  to={`/machine/${index}`}
                  style={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}
                  end>
                  <Typography>{machineType?.name || 'Untitled'}</Typography>
                </Button>
              ))}
              <Button
                sx={{ color: 'white' }}
                component={NavLink}
                to="/machine-type"
                style={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}>
                <Typography>Machine Types</Typography>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <CustomDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          activeNavLink={activeNavLink}
          normalNavLink={normalNavLink}
        />
      </Box>
    </>
  );
};

export default Navbar;
