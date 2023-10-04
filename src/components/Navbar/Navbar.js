import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Icons, Search, StyledToolbar, UserBox } from './Navbar.styled';
import { Mail, Notifications } from '@mui/icons-material';
import { useState } from 'react';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant={'h6'}
          sx={{ display: { mobile: 'none', tablet: 'block' } }}
        >
          OLYA DEV
        </Typography>
        <LocalFloristIcon
          sx={{ display: { mobile: 'block', tablet: 'none' } }}
        />

        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="secondary">
            <Notifications />
          </Badge>
          <Avatar
            src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203272/samples/woman-on-a-football-field.jpg"
            onClick={handleClick}
          />
        </Icons>

        <UserBox>
          <Avatar
            src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203272/samples/woman-on-a-football-field.jpg"
            onClick={handleClick}
          />
          <Typography>Olya</Typography>
        </UserBox>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
