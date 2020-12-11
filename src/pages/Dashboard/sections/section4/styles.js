const styles = (theme) => ({
  root: {
    background: '#fafafa',
    padding: '50px 10%',
    // padding: '50px',
    width: '100vw !important',
    overflow: 'hidden',
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
    },
  },
  header3: {
    fontSize: '1.35rem',
    margin: '0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  descText: {
    fontSize: '1.125rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
  spacingBottom: {
    marginBottom: '50px',
  },
  spacingBottom2: {
    marginBottom: '30px',
  },
  fullWidth: {
    width: '100%',
  },
  width50: {
    width: '50%',
  },
  width60: {
    width: '60%',
  },
  fullHeight: {
    height: '100vh',
  },
  fullHeight2: {
    height: '130vh',
    [theme.breakpoints.down('sm')]: {
      height: '80vh',
    },
  },
  imgFuncDisabled: {
    pointerEvents: 'none',
  },
});

export default styles;
