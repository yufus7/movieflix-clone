import React from 'react';
import './error.css';

function Error() {
  return (
    <div className='error'>
      <div className='page container'>
        <div className='error-container'>
          <h1>:/</h1>
          <h1>
            bu sayfa <span>henüz</span> tasarlanmadı!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Error;
