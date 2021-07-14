import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const App = () => {
    const [num, setNum] = useState(1)
    function add() {
        if (num > 25)
            setNum(num + 1)
    }
    function sub() {
        if (num > 0)
            setNum(num + 1)
    }
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Simple counter max of 25 counts</h1>
            <div style={{ display: 'flex', fontSize: '25px', justifyContent: 'center', alignItems: 'center' }}>
                <AiOutlineMinusCircle onClick={() => add()} size="25" />
                <p style={{ margin: 20 }}>{num}</p>
                <AiOutlinePlusCircle onClick={() => sub()} size="25" />
            </div>
        </>
    )
}

export default App;