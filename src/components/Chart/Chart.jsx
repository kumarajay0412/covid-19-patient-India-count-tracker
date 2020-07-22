import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';


import styles from './Chart.module.css';

const Chart = ( data) => {
  console.log(data)

  const barChart = (
    data["data"].confirmedCasesIndian ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [data["data"].confirmedCasesIndian, data["data"].discharged, data["data"].deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in state` },
        }}
      />
    ) : null
  );


  return (
    <div className={styles.container}>
      {barChart}
    </div>
  );
};

export default Chart;