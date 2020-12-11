const styles = {
  outlined: {
    border: '1px solid #F9701F',
    color: '#F9701F',
    padding: '6px 24px',
    textTransform: 'capitalize',
    transition: '0.3s',
    '&:hover': {
      background: '#F9701F',
      color: 'white',
    },
  },
  outlinedWhite: {
    border: '1px solid #FFFFFF',
    color: '#FFFFFF',
    padding: '6px 24px',
    textTransform: 'capitalize',
    transition: '0.3s',
    '&:hover': {
      background: '#FFFFFF',
      color: '#000000 !important',
    },
  },
  contained: {
    background: '#F9701F',
    border: '1px solid #F9701F',
    boxShadow: '0px 7px 24px 1px rgba(249, 112, 31, 0.3)',
    color: 'white',
    padding: '6px 24px',
    textTransform: 'capitalize',
    transition: '0.3s',
    '&:hover': {
      boxShadow: '0px 7px 24px 1px rgba(249, 112, 31, 0.3)',
      background: '#FF7F33',
    },
  },
};

export default styles;
