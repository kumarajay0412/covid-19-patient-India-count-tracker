import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = (data) => {
  console.log(data["data"])
  console.log(data)
  if (!data) {
    return 'Loading.@..';
  }
  if(data["data"]["data"]!=null){
    
    var TOTAL = data["data"]["data"]["summary"].total;
    var RECOVERED= data["data"]["data"]["summary"].discharged;
    var DEATHS= data["data"]["data"]["summary"].deaths;
  }  
  return (

    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
    
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
     
            <Typography variant="h5" component="h2">
              {TOTAL}
            </Typography>

            <Typography color="textSecondary">
              {new Date(data["data"]["lastRefreshed"]).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              {RECOVERED}
            </Typography>
            <Typography color="textSecondary">
              {new Date(data["data"]["lastRefreshed"]).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
             {DEATHS}   
            </Typography>
            <Typography color="textSecondary">
              {new Date(data["data"]["lastRefreshed"]).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;