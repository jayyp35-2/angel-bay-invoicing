import React from 'react';
import { useSelector } from 'react-redux';
import './GeneratedInvoice.scss';
import OrderTable from './OrderTable';

function GeneratedInvoice() {
  const buyer_details = useSelector(state => state.invoice.buyer_details);
  const order_details = useSelector(state => state.invoice.order_details);
  return (
    <div className='GeneratedInvoice'>
      <div className='Header'>

        <div className='Company'>
          <div className='Label'>
            Angel Bay
          </div>
          <div className='Addr'>
            <div>C-48 A, Ram Das Marg</div>
            <div>Tilak Nagar, Jaipur</div>
            <div>Rajasthan, India - 302004</div>
            <div style={{ marginTop: "5px", fontWeight: "bold" }}>GSTIN - 08ACBPK4426F1ZW</div>
          </div>
        </div>
        <div className='Inv'>INVOICE</div>
      </div>


      <div className='Billing'>
        <div>
          <div className='Head'>Bill To:</div>
          <div>{buyer_details?.name ?? ""}</div>
          <div>{buyer_details?.person ?? ""}</div>
          <div>{buyer_details?.addr1 ?? ""}</div>
          <div>{buyer_details?.addr2} - <span>{buyer_details?.pincode ?? ""}</span></div>
          <div>Contact - {buyer_details?.contact ?? ""}</div>
        </div>
        <div className='Right'>
          <div className='Head'>Transport:</div>
          <div className='highlight-yellow'>BY ROAD/BY AIR-FOB </div>
          <div>--</div>
          <div>Please suggest your own transport (if any)</div>
        </div>
      </div>

      <div className='Advance'>30% ADVANCE, DELIVERY IN 4-6 WEEKS</div>

      <div className='TableContainer'>
        <OrderTable />
      </div>
    </div>
  )
}

export default GeneratedInvoice