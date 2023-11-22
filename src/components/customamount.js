 import React from 'react';
 const CustomSongRequest=({adminDetails,handleCustomAmountChange}) =>(
 <div style={{ display:"flex",alignItems:"center",justifyItems:"center", justifyContent:"center",  marginBottom: '200px', width: '100%', margin: '0 auto' }}>
           
  Custom Song Request Amount:
 <input
   type="number"
   value={adminDetails.customAmount}
   onChange={(e) => handleCustomAmountChange(e.target.value)}
   disabled={!adminDetails.chargeCustomers}
   min={0}
   style={{
     fontSize: '16px',
     border: '1px solid #FFFFFF',
     borderRadius: '10px',
     backgroundColor: '#150022',
     color: '#FFFFFF',
     margin: '8px 0',
     padding: '8px',
     width: '20%',
   }}
 />
</div>
);
export default CustomSongRequest;