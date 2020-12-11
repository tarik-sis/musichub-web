const styles = (theme) => ({
  root: {
    background: '#FFFFFF',
    padding: '100px 10%',
    // padding: '100px 50px',
    [theme.breakpoints.down('xs')]: {
      padding: '50px 20px',
    },
  },
  header1: {
    margin: '0',
    fontSize: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  spacingBottom: {
    marginBottom: '50px',
  },
  buttonMobile: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
});

export default styles;
