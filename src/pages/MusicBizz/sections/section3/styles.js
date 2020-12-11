const styles = (theme) => ({
  root: {
    background: '#FFFFFF',
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
    },
  },
  header2: {
    fontSize: '2rem',
    margin: '0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3rem',
    },
  },
  listNum: {
    fontSize: '5rem',
    color: '#F9701F',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
  },
  descText: {
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
  spacingBottom: {
    marginBottom: '50px',
  },
  spacingLeft: {
    marginLeft: '30px',
  },
  spacingRight: {
    marginRight: '30px',
  },
  fullWidth: {
    width: '100%',
  },
  width60: {
    width: '60%',
  },
  fullHeight: {
    height: '100vh',
  },
  alur: {
    margin: '-50px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0 50px',
    },
  },
  imgFuncDisabled: {
    pointerEvents: 'none',
  },
});

export default styles;
