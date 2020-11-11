import React, { useState, useEffect } from 'react';

function HookCounterOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("")

    // useEffect(() => {
    //     document.title = `You clicked ${count} times`
    // })

    useEffect(() => {
        // runs on every render its not optimal
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>count {count}</button>
        </div>
    )
}

export default HookCounterOne;