import { Home, People, Article, ModeNight } from '@mui/icons-material';
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import React from 'react';
import { StyledList } from './Sidebar.styled';

const Sidebar = ({ setMode, mode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { mobile: 'none', tablet: 'block' } }}>
      <Box position="fixed">
        <StyledList>
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItemButton>
          </ListItem>
        </StyledList>
      </Box>
    </Box>
  );
};

export default Sidebar;
