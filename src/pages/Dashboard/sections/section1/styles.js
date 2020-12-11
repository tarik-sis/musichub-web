const styles = (theme) => ({
  root: {
    minHeight: '100vh',
    background: '#FFFFFF',
    padding: '50px 10%',
    // padding: '50px 0 50px 50px',
    // [theme.breakpoints.down('sm')]: {
    //   padding: '70px 50px 50px',
    // },
    [theme.breakpoints.down('xs')]: {
      padding: '70px 20px 50px',
    },
  },
  mobileOrder1: {
    [theme.breakpoints.down('sm')]: {
      order: '1',
    },
  },
  mobileOrder2: {
    [theme.breakpoints.down('sm')]: {
      order: '2',
    },
  },
  header1: {
    margin: '0',
    fontSize: '2.5rem',
    width: '90%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  spacingBottom: {
    marginBottom: '30px',
  },
  fullWidth: {
    width: '100%',
  },
  width80: {
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  fullHeight: {
    height: '100vh',
  },
  imgFuncDisabled: {
    pointerEvents: 'none',
  },
});

export default styles;
