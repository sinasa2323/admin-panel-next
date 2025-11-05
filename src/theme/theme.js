'use client';

import { createTheme } from '@mui/material/styles';

export const getAppTheme = (mode = 'light') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            background: { default: '#f7f7f9', paper: '#ffffff' },
          }
        : {
            background: { default: '#0f1115', paper: '#141821' },
          }),
      primary: { main: '#1976d2' },
      secondary: { main: '#9c27b0' },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiAppBar: {
        defaultProps: { elevation: 0 },
      },
    },
  });
