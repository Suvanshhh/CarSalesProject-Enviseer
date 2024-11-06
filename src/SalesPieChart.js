import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesPieChart = ({ data, onCompanyClick, totalCars }) => {
  // Making the chart with using chart data:
  const chartData = {
    labels: data.map((entry) => entry.company + " - " + entry.model),
    datasets: [
      {
        data: data.map((entry) => entry.noOfCars),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
      },
    ],
  };


  const handleClick = (event, elements) => {
    if (elements && elements.length > 0) {
      const companyIndex = elements[0].index;
      const companyName = data[companyIndex].company;
      onCompanyClick(companyName); 
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Pie data={chartData} onClick={handleClick} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Total: {totalCars}
      </div>
    </div>
  );
};

export default SalesPieChart;
