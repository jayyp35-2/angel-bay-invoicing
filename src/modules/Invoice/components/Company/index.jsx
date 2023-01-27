import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from '../../../../common/_custom/button/button';
import Input from '../../../../common/_custom/input/input';
import './Company.scss';

function Company({ createOrder }) {
  const [values, setValues] = useState({
    name: "",
    person: "",
    contact: "",
    email: "",
    altContact: "",
    addr1: "",
    addr2: "",
    landmark: "",
    pincode: ""
  });
  const [errors, setErrors] = useState({
    name: false,
    person: false,
    contact: false,
    addr1: false,
    pincode: false
  })
  const errorsExist = errors.name || errors.person || errors.contact || errors.addr1 || errors.pincode;
  const checkErrors = (createOrder) => {
    setErrors(errors => ({
      name: !!!values.name.length,
      person: !!!values.person.length,
      contact: !!!values.contact.length,
      addr1: !!!values.addr1.length,
      pincode: !!!values.pincode.length
    }))
    const errorsExist = !!!values.name.length || !!!values.person.length || !!!values.contact.length || !!!values.addr1.length || !!!values.pincode.length;
    if (!errorsExist) {
      createOrder && createOrder();
    }
  }

  const changeValue = (key, e) => {
    setErrors(errors => ({
      ...errors,
      [key]: false
    }))
    const new_values = values;
    new_values[key] = e.target.value;
    setValues({ ...new_values });
  }

  const onCreateClick = () => {
    checkErrors(createOrder);
  }

  return (
    <div className='Company'>

      <div className='Title mb-20'>
        Buyer Details
      </div>

      <div className=''>
        <Input label="Company Name" required error={errors.name} onChange={(e) => changeValue('name', e)} />
      </div>

      <div className='display-grid grid-col-2 col-gap-40 mt-20'>
        <Input label="Person Of Contact" required error={errors.person} onChange={(e) => changeValue('person', e)} />
        <Input label="Contact Number" required error={errors.contact} onChange={(e) => changeValue('contact', e)} />
      </div>

      <div className='display-grid grid-col-2 col-gap-40 mt-20'>
        <Input label="Email Address" onChange={(e) => changeValue('email', e)} />
        <Input label="Alternate Contact Number" onChange={(e) => changeValue('altContact', e)} />
      </div>

      <div className='Subtitle mt-40'>Shipping Address</div>
      <Input placeholder={"Address Line 1"} className="my-20" required error={errors.addr1} onChange={(e) => changeValue('addr1', e)} />
      <Input placeholder={"Address Line 2"} onChange={(e) => changeValue('addr2', e)} />

      <div className='display-grid grid-col-2 col-gap-40 mt-20'>
        <Input label="Landmark" onChange={(e) => changeValue('landmark', e)} />
        <Input label="Pincode" required error={errors.pincode} onChange={(e) => changeValue('pincode', e)} />
      </div>

      <Button text="Create Order" className='mt-40' onClick={onCreateClick} />
      {errorsExist && <span className='ErrorText'>Please fill the missing data.</span>}
    </div>
  )
}

export default Company;
