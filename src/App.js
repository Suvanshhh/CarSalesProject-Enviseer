import React, { useState } from 'react';
import { salesData as initialSalesData } from './data';
import SalesTable from './SalesTable';
import SalesPieChart from './SalesPieChart';

const App = () => {
  const [salesData, setSalesData] = useState(initialSalesData);
  const [selectedCompanies, setSelectedCompanies] = useState([]);


  const handleCompanyClick = (company) => {
    setSelectedCompanies((prevSelected) =>
      prevSelected.includes(company)
        ? prevSelected.filter((c) => c !== company) // Deselect if already selected
        : [...prevSelected, company] // Add to selected if not yet selected
    );
  };

  // Increment functionality
  const incrementCars = (index) => {
    setSalesData((prevData) => {
      const newData = [...prevData];
      newData[index].noOfCars += 1;
      return newData;
    });
  };

  // Decrement functionality
  const decrementCars = (index) => {
    setSalesData((prevData) => {
      const newData = [...prevData];
      if (newData[index].noOfCars > 0) {
        newData[index].noOfCars -= 1;
      }
      return newData;
    });
  };

  // Filtering the data
  const filteredData = salesData.filter(
    (item) => !selectedCompanies.includes(item.company)
  );

  //Updating total number of cars
  const totalCars = filteredData.reduce((acc, item) => acc + item.noOfCars, 0);

  return (
    <div className="dashboard-container">
      <h1>Car Sales Data - 2024</h1>
      <h4>Click on a chart segment to filter out car companies!</h4>
      <div className="pie-chart-container">
        <SalesPieChart
          data={filteredData}
          onCompanyClick={handleCompanyClick}
          totalCars={totalCars} 
        />
      </div>
      <SalesTable
        data={filteredData}
        totalCars={totalCars}
        incrementCars={incrementCars}
        decrementCars={decrementCars}
      /> {/* Displaying total in table */}
    </div>
  );
};

export default App;
