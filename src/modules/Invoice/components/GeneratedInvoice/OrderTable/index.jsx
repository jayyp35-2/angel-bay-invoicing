import React from 'react';
import SizeTable from '../../../../../common/SizeTable';
import './OrderTable.scss';

function OrderTable() {
  return (
    <table className='Table'>
      <thead>
        <th className='Sno'>S.no</th>
        <th className='Item'>Item Summary</th>
        <th className='Qty'>Total Qty.</th>
        <th className='Rate'>
          Rate Per Pc
          <div>(₹)</div>
        </th>
        <th className='Taxable'>
          Taxable Value
          <div>(₹)</div>
        </th>
        <th className='Igst'>IGST</th>
        <th className='Total'>Total</th>
      </thead>

      <tbody>
        <tr>
          <td className='Sno'>1.</td>
          <td className='Item'>
            <div>
              <span>Style Name</span>, <span>Style Number - 24JSPD</span>
            </div>
            <div>
              <img
                src={"https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"}
                height="100px"
                alt="check"
              />
            </div>
          </td>
          <td className='Qty'>23</td>
          <td className='Rate'>4500.00</td>
          <td className='Taxable'>40000.00</td>
          <td className='Igst'>
            <div>₹4300.44</div>
            <div>@5%</div>
          </td>
          <td className='Total'>₹48324.44</td>
        </tr>
        <tr>
          <td>1.</td>
          <td>
            <div>
              <span>Style Name</span>, <span>Style Number - 24JSPD</span>
            </div>
            <div>
              <img
                src={"https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"}
                height="120px"
                alt="check"
              />
            </div>
          </td>
          <td>23</td>
          <td>4500.00</td>
          <td>40000.00</td>
          <td>
            <div>₹4300.44</div>
            <div>@5%</div>
          </td>
          <td>₹48324.44</td>
        </tr>

      </tbody>
    </table>
  )
}

export default OrderTable