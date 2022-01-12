import React from 'react'
import Button from './Button'

function ButtonDrawer() {
    const buttonArr = [
        'AC', 'null', '%', '/',
        '7', '8', '9', 'x',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        'null', '0', '.', '='
    ]
    return (
        <div className='button_drawer'>
            {buttonArr.map(i =>
                <Button
                  symbol = {i}
                />
                )}
        </div>
    )
}

export default ButtonDrawer
