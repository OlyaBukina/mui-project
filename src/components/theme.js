export const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#2c847e',
            light: '#5ac1ba',
          },
          secondary: {
            main: '#c5c32f',
          },
          otherColors: {
            main: '#999',
          },
          background: {
            default: '#fff',
          },
          text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#2c847e',
            light: '#5ac1ba',
          },
          secondary: {
            main: '#c5c32f',
          },
          otherColors: {
            main: '#999',
          },
          background: {
            default: '#121212',
          },
          text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
          },
        }),
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },
});

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2c847e',
//       light: '#5ac1ba',
//     },
//     secondary: {
//       main: '#c5c32f',
//     },
//     otherColors: {
//       main: '#999',
//     },
//   },
//   breakpoints: {
//     values: {
//       mobile: 0,
//       tablet: 768,
//       laptop: 1024,
//       desktop: 1440,
//     },
//   },
// });
