import {
  Divider,
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CustomDrawer = ({
  mobileOpen = false,
  handleDrawerToggle,
  drawerWidth = 240,
  activeNavLink,
  normalNavLink,
}) => {
  const machineTypes = useSelector((state) => state.machineTypes);

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          React Hackathon
        </Typography>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/"
              style={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}
              sx={{ textAlign: 'center', color: 'black' }}
              end>
              <ListItemText primary="All Machines" />
            </ListItemButton>
          </ListItem>
          {machineTypes.map((machineType, index) => (
            <ListItem disablePadding key={machineType.id}>
              <ListItemButton
                component={NavLink}
                to={`/machine/${index}`}
                style={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}
                sx={{ textAlign: 'center', color: 'black' }}
                end>
                <ListItemText primary={machineType.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/machine-type"
              style={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}
              sx={{ textAlign: 'center', color: 'black' }}>
              <ListItemText primary="Machine Type" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
