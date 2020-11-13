import React from 'react';
import Card from '@material-ui/core/Card';
// import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import FastfoodIcon from "@material-ui/icons/Fastfood";
// import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './trackCard.styles';

const TrackCard = ({ props, date }) => {
  const classes = useStyles(props);
  // const formatDate = (datetime) => new Date(datetime).toDateString();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs>
                <CircularProgress
                  variant="static"
                  value={progress}
                  style={{ color: '#97E493', fontWeight: 'bold' }}
                />
                {/* <DonutLargeRoundedIcon
                  style={{ color: '#42B5E8', fontWeight: 'bold' }}
                  fontSize="large"
                /> */}
              </Grid>
              <Grid item xs>
                <Typography
                  className={classes.title}
                  style={{ color: '#42B5E8', fontWeight: 'bold' }}
                  gutterBottom
                >
                  {date}
                </Typography>
              </Grid>
              <Grid item xs>
                <ArrowForwardIosIcon
                  className={classes.icon}
                  style={{ color: 'grey', fontWeight: 'bold' }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

TrackCard.propTypes = {
  props: PropTypes.func,
  date: PropTypes.string.isRequired,
  // cardLink: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
};

TrackCard.defaultProps = {
  props: () => {},
};

export default TrackCard;
