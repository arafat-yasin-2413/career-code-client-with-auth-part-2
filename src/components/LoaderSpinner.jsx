import React from 'react';

const LoaderSpinner = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default LoaderSpinner;