import React from 'react';
import { Card,Cards2, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import CountTo from 'react-count-to';
import styles from './Cards2.module.css';

const Info = (data) => {
  if (!data) {
    return 'Loading...';
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
            {<CountTo to={data["data"].confirmedCasesIndian} speed={2000} />}
              
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
            {<CountTo to={data["data"].discharged} speed={2000} />}
       
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
            {<CountTo to={data["data"].deaths} speed={2000} />}
     
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