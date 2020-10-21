import React from 'react'

// const Basket = (props) => (
//   <div className="panel panel-primary">
//     <div className="panel-heading">
//       <h3>Product Selected:</h3>
//       <h2 className='text-primary'>product??? TODO - $0</h2>
//       <p>description???????</p>
//     </div>
//     <div className="panel-body">
//       <h3>Upgrades (TODO):</h3>
//       {/* <button className='btn btn-default my-3'>blah blah</button> */}
//     </div>
//     <div className="panel-footer">
//       <h3>Total: <span className='text-primary'>$10</span></h3>
//     </div>
//   </div>
// )

// export default Basket

const Basket = (props) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3>Product Selected:</h3>
      <h2 className='text-primary'>{props.product.name} - ${props.product.price}</h2>
      <p>{props.product.description}</p>
    </div>
    <div className="panel-body">
      <h3>Upgrades:</h3>
      { props.upgrades && props.upgrades.map((upgrade) => (
        <button onClick={() => props.updateTotal(upgrade.price)} className='btn btn-default my-3'>{upgrade.name} - ${upgrade.price}</button>
      ))}
    </div>
    <div className="panel-footer">
      <h3>Total: <span className='text-primary'>${props.total}</span></h3>
    </div>
  </div>
)

export default Basket