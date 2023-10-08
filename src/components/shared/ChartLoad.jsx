import React from 'react';

const ChartLoad = () => {
    return (
        <div className='  p-3 flex h-[50vh] w-full justify-normal flex-col items-center '>

            <span class="loader mb-4">
            </span>
            <div className=' font-semibold text-base'>Loading Data</div>
            <p className='text-gray-600'>Please wait a moment</p>

        </div>
    );
};

export default ChartLoad;