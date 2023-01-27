import React, { useState } from 'react';
import Input from '../../common/_custom/input/input';
import { singleOrderItem } from '../../store/invoice_constants';
import Company from './components/Company';
import Order from './components/Order';
import './Invoice.scss';

function Invoice(props) {

  const [orderData, setOrderData] = useState([]);

  const createOrder = () => {
    const single_order = JSON.parse(JSON.stringify(singleOrderItem));
    setOrderData([single_order])
  }

  return (
    <div className='Invoice'>
      <div className='Title'>Generate Invoice</div>

      <div className='Card'>
        <Company createOrder={createOrder} />
      </div>

      {!!orderData?.length && (
        <div className='Card mt-40'>
          <Order orderData={orderData} setOrderData={setOrderData} />
        </div>
      )}

    </div>
  )
}

export default Invoice;