import React from 'react'
import { BlockSpinner, DotSpinner, DoubleArrowTailSpin, FadInOutSpinner, OvalFill, SingleArrowTailSpin } from './Loader'

const LoadSpinnerCard = () => {
  return (
    <div className='grid grid-cols-4 gap-10 bg-transparent shadow-lg rounded-md p-4 w-2/5'>
        <div className='col-span-1 flex justify-center'>
            <DoubleArrowTailSpin/>
        </div>
        <div className='col-span-1 flex justify-center'>
            <SingleArrowTailSpin/>
        </div>
        <div className='col-span-1 flex justify-center'>
            <OvalFill/>
        </div>
        <div className='col-span-1 flex justify-center'>
            <DotSpinner/>
        </div>
        <div className='col-span-1 h-20 flex justify-center'>
            <FadInOutSpinner/>
        </div>
        <div className='col-span-1 h-20 flex justify-center'>
            <BlockSpinner/>
        </div>

        
        
    </div>
  )
}

export default LoadSpinnerCard