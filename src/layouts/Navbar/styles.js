const styles = (theme) => ({
  root: {
    background: '#FFFFFF',
    boxShadow: '0px 4px 60px rgba(138, 149, 147, 0.2)',
    padding: '0 10%',
    // no padding
    [theme.breakpoints.down('xs')]: {
      padding: '0 20px',
    },
  },
  logo: {
    color: '#F9701F',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    textDecoration: `none`,
    marginRight: '50px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
    },
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: 'center',
  },
  linkText: {
    position: 'relative',
    fontSize: '1.125rem',
    textDecoration: `none`,
    textTransform: `capitalize`,
    color: `#323334`,
    transition: '0.3s',
    '&:hover': {
      color: '#F9701F',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: '5px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '2px',
      background: '#F9701F',
      transition: '0.3s',
    },
    '&:hover::before': {
      width: '100%',
    },
  },
  linkActive: {
    color: '#F9701F',
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: '5px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      height: '2px',
      background: '#F9701F',
      transition: '0.3s',
    },
  },
  container: {
    margin: '0',
    maxWidth: '100% !important',
    padding: '0 !important',
  },
});

export default styles;
