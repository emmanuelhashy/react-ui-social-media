import React from 'react';
import { useFilterContext } from '../context/FilterContext';

const FormRange = ({ label, name, type, size }) => {
  const { minPrice, maxSelectedPrice, setMinPrice, setMaxSelectedPrice, maxPrice } = useFilterContext();

  const step = 1000;
  const selectedPrice = type === 'min' ? minPrice : maxSelectedPrice;

  // Handle range change
  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (type === 'min') {
      setMinPrice(value);
    } else {
      setMaxSelectedPrice(value);
    }
  };

  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
        <span>{selectedPrice}</span>
      </label>
      <input
        type='range'
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={handleRangeChange} // Update the global state on change
        className={`range range-error ${size}`}
        step={step}
      />
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>0</span>
        <span className='font-bold text-md'>Max: {maxPrice}</span>
      </div>
    </div>
  );
};

export default FormRange;
