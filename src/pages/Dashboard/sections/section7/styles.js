const styles = (theme) => ({
  root: {
    background: '#FFFFFF',
    padding: '50px',
    [theme.breakpoints.down('xs')]: {
      padding: '50px 20px',
    },
  },
  header1: {
    fontSize: '2.5rem',
    textAlign: 'center',
    margin: 'auto',
  },
  quotes: {
    position: 'absolute',
    margin: 0,
    fontSize: '8rem',
  },
  quote1: {
    top: 0,
    left: 0,
  },
  quote2: {
    bottom: 0,
    right: 0,
    transform: 'rotate(180deg)',
  },
  person: {
    color: '#FFFFFF',
    background: '#323334',
    padding: '6px 20px',
    textAlign: 'center',
  },
  spacingBottom: {
    marginBottom: '50px',
  },
  spacingBottom2: {
    marginBottom: '30px',
  },
  width80: {
    width: '80%',
  },
  fullHeight: {
    minHeight: '100vh',
  },
});

export default styles;
