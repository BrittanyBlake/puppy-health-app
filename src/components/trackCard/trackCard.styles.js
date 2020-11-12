import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '5em',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
});

export default useStyles;
