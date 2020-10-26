import React, { useState } from 'react'
import Basket from '../components/Basket'

const Payment = () => {
  const [paid, setPaid] = useState(false)
  const product = {
    name: 'Room at Trump Tower',
    price: '$10',
    description: 'Bestest product, 5 mins from a road somewhere and a local tree'
  }

  const makePayment = () => {
    setPaid(true)
  }

  return (
    <div class="container">
      <div className='col-xs-8 text-center'>
        <h1>Payment Page</h1>
        <h2>You're booking this insane product!</h2>
          <button className='btn btn-xl btn-primary' onClick={makePayment}>Pay Now!</button>
          <p>paid: {paid} total: {product.price}</p>
      </div>

      <div className='col-xs-4'>
        <Basket product={product}/>
      </div>

    </div>
  )
}

export default Payment

// const Payment = () => {
//   const product = {
//     name: 'Room at Trump Tower',
//     price: 10,
//     description: 'Bestest product, 5 mins from a road somewhere and a local tree'
//   }

//   const upgrades = [{
//     name: 'Dinner for 900 people',
//     price: 1,
//   },
//   {
//     name: 'Lessons how to backflip',
//     price: 2,
//   }]

//   const [paid, setPaid] = useState(false)
//   const [total, setTotal] = useState(product.price)

//   const updateTotal = (itemPrice) => {
//     setTotal(total + itemPrice)
//   }

//   const makePayment = () => {
//     setPaid(true)
//   }

//   return (
//     <div class="container">
//       <div className='col-xs-8 text-center'>
//         <h1>Payment Page</h1>
//         <h2>You're booking this insane product!</h2>
//         {paid ? (
//           <h4 className='text-success'>Successful Payment! Amount: ${total}</h4>
//         ) : (
//           <button className='btn btn-xl btn-primary' onClick={makePayment}>Pay Now!</button>
//         )}
//       </div>

//       <div className='col-xs-4'>
//         {!paid && <Basket
//           product={product}
//           upgrades={upgrades}
//           total={total}
//           updateTotal={updateTotal}
//         />}
//       </div>

//     </div>
//   )
// }

// export default Payment