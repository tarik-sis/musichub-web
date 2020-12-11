const styles = (theme) => ({
  root: {
    background: '#323334',
    padding: '50px 10% 20px',
    // padding: '50px 50px 20px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      padding: '50px 20px 20px',
    },
  },
  header: {
    margin: '0 0 20px',
    color: 'white',
  },
  headerBrand: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginBottom: '30px',
    },
  },
  link: {
    display: 'block',
    margin: '0 0 20px',
    textDecoration: 'none',
    width: 'fit-content',
    color: 'white',
    '&:hover': {
      color: '#F9701F',
      textDecoration: 'underline',
    },
  },
  social: {
    marginRight: '10px',
  },
  divider: {
    textAlign: 'center',
    borderTop: '2px solid #FFFFFF',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  colorWhite: {
    color: 'white',
  },
});

export default styles;
