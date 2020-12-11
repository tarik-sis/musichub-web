const styles = (theme) => ({
  root: {
    background: '#fafafa',
    padding: '50px 10%',
    // padding: '50px',
    [theme.breakpoints.down('xs')]: {
      padding: '50px 20px',
    },
  },
  header1: {
    fontSize: '2.5rem',
    textAlign: 'center',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      textAlign: 'left',
    },
  },
  mobOrder1: {
    [theme.breakpoints.down('sm')]: {
      order: '1',
      margin: '0 0 70px !important',
    },
  },
  mobOrder2: {
    [theme.breakpoints.down('sm')]: {
      order: '2',
    },
  },
  spacingBottom: {
    marginBottom: '50px',
  },
  spacingLeft: {
    marginLeft: '30px',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
  },
  fullWidth: {
    width: '100%',
  },
  width60: {
    width: '60%',
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
