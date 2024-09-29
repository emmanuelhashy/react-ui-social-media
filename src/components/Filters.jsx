import React from 'react';
import FormRange from './FormRange';
import { FilterProvider, useFilterContext } from '../context/FilterContext';
import ProductList from './ProductList';

// Filter Button Component
const FilterButton = () => {
  const { applyFilters } = useFilterContext();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    applyFilters();     // Trigger the filter when the form is submitted
  };

  return (
    <button
      type="button" // Button will submit the form
      onClick={handleSubmit}
      className="btn btn-primary btn-sm"
    >
      Filter
    </button>
  );
};

// Reset Button Component
const ResetButton = () => {
  const { resetFilters } = useFilterContext();

  return (
    <button
      type="button"
      onClick={resetFilters} // Call resetFilters when button is clicked
      className="btn btn-accent btn-sm"
    >
      Reset Filters
    </button>
  );
};

const Filters = () => {
  const { applyFilters } = useFilterContext();

  // Handle form submission for filtering
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    applyFilters();     // Trigger the filter when the form is submitted
  };

  return (
    
      <div className='bg-base-200 rounded-md px-8 py-4'>
        {/* Filter Form */}
        <form
          onSubmit={handleSubmit} // Handle form submission
          className='grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'
        >
          {/* Min Price */}
          <FormRange
            name='min-price'
            label='Min Price'
            size='range-sm'
            type='min'
          />
          {/* Max Price */}
          <FormRange
            name='max-price'
            label='Max Price'
            size='range-sm'
            type='max'
          />
          {/* Filter and Reset Buttons */}
          <FilterButton /> {/* Filter button */}
          <ResetButton /> {/* Reset button */}
        </form>

        {/* Product List */}
        <ProductList />
      </div>
  );
};

export default Filters;
