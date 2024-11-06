import React from 'react';

const SalesTable = ({ data, totalCars, incrementCars, decrementCars }) => {
  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
            <th>Company</th>
            <th>Model</th>
            <th>No. of Cars Sold</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.company}</td>
              <td>{item.model}</td>
              <td>
                <button onClick={() => decrementCars(index)} style={{ marginRight: '5px', cursor: 'pointer' }}>➖</button>
                {item.noOfCars}
                <button onClick={() => incrementCars(index)} style={{ marginLeft: '5px', cursor: 'pointer' }}>➕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h3 style={{ textAlign: 'center' }}>Total Cars in View: {totalCars}</h3>
    </div>
  );
};

export default SalesTable;
