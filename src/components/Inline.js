import React from 'react'

function Inline() {
    const heading={
        color:'red',
        fontSize:'30px'

    }
    return (
        <div>
        <h1 className='error'>Error</h1>
            <h1 style={heading}>hii inline stylesheet</h1>
        </div>
    )
}

export default Inline
