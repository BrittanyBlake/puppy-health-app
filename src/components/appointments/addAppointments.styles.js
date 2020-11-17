import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '45%',
    },
    margin: '0 auto',
    marginTop: '5em',
    padding: '2em',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  title: {
    fontSize: 16,
    color: '#1c85d0',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
}));

export default useStyles;
