import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#5B8092',
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;
