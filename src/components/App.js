import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Feed from './Feed/Feed';
import Rightbar from './Rightbar/Rightbar';
import Sidebar from './Sidebar/Sidebar';
import NavBar from './Navbar/Navbar';
import AddButton from './AddButton/AddButton';
import { createContext, useMemo, useState } from 'react';
import { getDesignTokens } from './theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const App = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [setMode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <AddButton />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
