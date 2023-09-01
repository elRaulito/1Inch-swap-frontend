import React from 'react'

const Docs = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: "center" }}>
      <div style={{ width: '50%', backgroundColor: 'white', opacity: 0.7, padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', color: "black", margin: "auto", borderRadius: "1%" }}>
        <h3>Instructions</h3>
        <p>1. For swapping you have to be on Cardano mainnet. On other chains this does not work.</p>
        <p>2. You have to have some ADA for tx fees to send the $ amount</p>
        <p>3. 4₳ will be sent for the batcher and third party fees while 1% will be used by the protocol.</p>
      </div>
    </div>
  )
}

export default Docs