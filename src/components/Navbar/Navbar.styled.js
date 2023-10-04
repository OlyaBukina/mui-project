import styled from '@emotion/styled';
import { Box, Toolbar } from '@mui/material';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.primary,
}));

export const Search = styled.div(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  width: '40%',
  borderRadius: theme.shape.borderRadius,
}));

export const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('tablet')]: {
    display: 'flex',
  },
}));

export const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  [theme.breakpoints.up('tablet')]: {
    display: 'none',
  },
}));
