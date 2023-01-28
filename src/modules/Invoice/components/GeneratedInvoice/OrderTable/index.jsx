import React from 'react';
import { useSelector } from 'react-redux';
import SizeTable from '../../../../../common/SizeTable';
import './OrderTable.scss';
import SizeSummary from './SizeSummary';

function OrderTable() {
  const order_details = useSelector(state => state.invoice.order_details);
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
        {order_details?.length && order_details?.map((order, index) => (
          <>
            {!!(index === 3 || ((index - 3) % 5 === 0)) ? (
              <tr className={`spacer ${(index - 3 > 0 && ((index - 3) % 5 === 0)) && 'smallspacer'}`}><td>--</td></tr>
            ) : null}
            <tr key={index} >
              <td className='Sno'>{index + 1}.</td>
              <td className='Item'>
                <div>
                  <span>Style Name</span>, <span>Style Number - 24JSPD</span>
                </div>
                <div className='Row2'>
                  <img
                    src={"https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"}
                    height="100px"
                    alt="check"
                  />
                  <SizeSummary sizes={order.sizes} />
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
          </>
        ))}

      </tbody>
    </table>
  )
}

export default OrderTable