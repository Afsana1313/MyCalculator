import React from 'react'
// interface getButtonProps = {
//   symbol: any
// }
function Button({symbol}: any) {
  return (
    <div className='button'>
      {symbol}
    </div>
  )
}

export default Button
