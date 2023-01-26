export const globalStyle = (theme) => ({
  '*': { margin: 0, padding: 0 },

  html: {
    fontSize: '62.5%',
    // [theme.breakpoints.down('laptop')]: {
    //   fontSize: '50%',
    // },
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '200',
    lineHeight: '1.6',
    width: '100vw',
    overflowX: 'hidden',
  },
});
