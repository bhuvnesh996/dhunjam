// AdminHeader.jsx
import React from 'react';

const AdminHeader = ({ adminDetails }) => (
  <div style={{ marginBottom: '20px', textAlign: 'center',display:'flex',flexDirection:"row",alignContent:"center",alignItems:"center",justifyItems:"center",justifyContent:"center" }}>
    <p>
      <h2>{adminDetails.name},
    
      {adminDetails.location}</h2>
    </p>
  </div>
);

export default AdminHeader;
