import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '3em',
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
    paddingTop: '0.5em',
  },
  icon: {
    // fontSize: 16,
    // color: '#1c85d0',
    // fontWeight: 'bold',
    // textAlign: 'center',
    paddingTop: '0.3em',
  },
  pos: {
    marginBottom: 12,
  },
});

export default useStyles;
