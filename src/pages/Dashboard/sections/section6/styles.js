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
    },
  },
  header3: {
    fontSize: '1.35rem',
    margin: '0',
  },
  descText: {
    fontSize: '1.2rem',
  },
  quotes: {
    display: 'block',
    fontSize: '1rem',
    color: '#848585',
    width: '85%',
    margin: 'auto',
  },
  social: {
    textDecoration: 'none',
    color: '#D6D6D6',
    margin: '10px',
    '& svg': {
      fontSize: '2rem',
    },
    '&:hover': {
      color: '#5B5C5D',
    },
  },
  spacingBottom: {
    marginBottom: '50px',
  },
  spacingBottom2: {
    marginBottom: '30px',
  },
  width90: {
    width: '90%',
  },
  fullHeight: {
    minHeight: '100vh',
  },
  imgFuncDisabled: {
    pointerEvents: 'none',
  },
});

export default styles;
