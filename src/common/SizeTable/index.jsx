import React, { useState } from 'react';
import Input from '../_custom/input/input';
import './SizeTable.scss';

function SizeTable({ sizes, changeSize }) {

  return (
    <div className='SizeTable'>
      {Object.keys(sizes).map((size, index) => (
        <div key={index} className='Size' style={{ borderLeft: index !== 0 ? "1px solid black" : "" }}>
          <div className='Top'>{size}</div>
          <div className='Bottom'>
            <input className='size-input' value={sizes[size]} onChange={(e) => changeSize(e, size)} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SizeTable