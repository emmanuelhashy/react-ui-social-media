import React from 'react';
import FormRange from './FormRange';
import { useFilterContext } from '../context/FilterContext';
import ProductList from './ProductList.jsx';

const FilterButton = () => {
  const { applyFilters } = useFilterContext();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    applyFilters();     
  };

  return (
    <button
      type="button" 
      onClick={handleSubmit}
      className="btn btn-success btn-sm"
    >
      Filter
    </button>
  );
};

const ResetButton = () => {
  const { resetFilters } = useFilterContext();

  return (
    <button
      type="button"
      onClick={resetFilters}
      className="btn btn-error btn-sm"
    >
      Reset Filters
    </button>
  );
};

const Filters = () => {
  const { applyFilters } = useFilterContext();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    applyFilters();
  };

  return (
    
      <div className='px-8 py-4'>
        <form
          onSubmit={handleSubmit} 
          className='bg-base-200 px-8 py-4 rounded-md grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'
        >
          <FormRange
            name='min-price'
            label='Min Price'
            size='range-sm'
            type='min'
          />
          <FormRange
            name='max-price'
            label='Max Price'
            size='range-sm'
            type='max'
          />
          <FilterButton />
          <ResetButton />
        </form>
        <ProductList />
      </div>
  );
};

export default Filters;
