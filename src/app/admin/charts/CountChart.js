import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Sad or Down','Anxious or Worried','Guilt or Regret','Stressed','Content','Happy','Frustrated',
    'Exhausted',
    'Not happy'],
  datasets: [
    {
      label: '',
      data: [12, 19, 3, 5, 2, 3,10,3,5,7],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
       
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        
      ],
      // borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    
  },
};

const HorizontalChart = () => (
 
    <Bar data={data} options={options}  />
  
);

export default HorizontalChart;