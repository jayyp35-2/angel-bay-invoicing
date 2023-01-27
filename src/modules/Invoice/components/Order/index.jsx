import React from 'react';
import Select from 'react-select';
import Input from '../../../../common/_custom/input/input';
import Button from '../../../../common/_custom/button/button';
import SizeTable from '../../../../common/SizeTable';
import './Order.scss';
import { useNavigate } from 'react-router-dom';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function Order({ orderData, setOrderData }) {

  const navigate = useNavigate();

  const addStyle = () => {
    setOrderData(orderData => [...orderData, {
      style: "",
      barcode: "",
      sizes: { 'XS': 0, 'S': 0, 'M': 0, 'L': 0, 'XL': 0, '2XL': 0, '3XL': 0 }
    }])
  }

  const changeValue = (key, index, e) => {
    const order_data = orderData;
    order_data[index][key] = e.target.value;
    setOrderData([...order_data]);
  }

  const changeSize = (sizeKey, index, e) => {
    const order_data = orderData;
    order_data[index]['sizes'][sizeKey] = e.target.value;
    setOrderData([...order_data]);
  }

  return (
    <div className='Order'>

      <div className='Title mb-20'>
        Order Details
      </div>

      {orderData.map((order, index) => (
        <div className='display-grid grid-col-3 col-gap-40 mb-50' key={index}>
          <div className='display-flex'>
            <div className='mr-20'>
              {index + 1}.
            </div>
            <div style={{ width: "100%" }}>
              <Select options={options} />
              <Input placeholder="Enter Barcode" className="mt-20" value={order.barcode} onChange={(e) => changeValue('barcode', index, e)} />
            </div>
          </div>
          <div className='ImageContainer'>
            <img
              src={"https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"}
              height="120px"
              alt="check"
            />
          </div>
          <div>
            <SizeTable sizes={order.sizes} changeSize={(e, sizeKey) => changeSize(sizeKey, index, e)} />
          </div>
        </div>
      ))}

      <Button text='Add Style' className='mt-20' onClick={addStyle} />
      <Button text='Generate Invoice and Style Sheet' className='mt-20 mx-40' onClick={() => navigate('/invoice')} />
    </div >
  )
}

export default Order;