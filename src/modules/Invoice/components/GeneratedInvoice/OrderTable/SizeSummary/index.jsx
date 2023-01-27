import React from 'react';
import './SizeSummary.scss';

function SizeSummary({ sizes }) {
  return (
    <div className='SizeSummary'>
      {Object.keys(sizes).map((size, index) => (
        <div className='SingleSize' key={index}>
          <span style={{ fontWeight: "bold" }}>{size}</span>: <span>{sizes[size]}</span>
        </div>
      ))}
    </div>
  )
}

export default SizeSummary