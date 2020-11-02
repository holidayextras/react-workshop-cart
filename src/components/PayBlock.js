import React from 'react'

const PayBlock = (props) => (
  <>
    <h1>Payment Page</h1>
    <h2>You're booking this insane product!</h2>
      {props.paid ? (
        <p>AAAAAAYYYYY!!!</p>
      ) : (
        <button className='btn btn-xl btn-primary' onClick={props.makePayment}>Pay Now!</button>
      )}
    <p>paid: {props.paid} total: {props.total}</p>
  </>
)

export default PayBlock
