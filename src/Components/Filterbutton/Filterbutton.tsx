// CashRangeFilter.js
import React, { useState } from 'react';

function CashRangeFilter({ onFilterChange }) {
  const [cashRange, setCashRange] = useState([0, 1000000]);

  const handleCashRangeChange = (newRange) => {
    setCashRange(newRange);
  };

  const applyFilter = () => {
    onFilterChange(cashRange);
  };

  return (
    <div className="cash-range-filter">
      {/* Your filter UI */}
      <input
        type="range"
        min={0}
        max={1000000}
        value={cashRange[0]}
        onChange={(e) => handleCashRangeChange([parseInt(e.target.value), cashRange[1]])}
      />
      <input
        type="range"
        min={0}
        max={1000000}
        value={cashRange[1]}
        onChange={(e) => handleCashRangeChange([cashRange[0], parseInt(e.target.value)])}
      />
      <button onClick={applyFilter}>Apply</button>
    </div>
  );
}

export default CashRangeFilter;
