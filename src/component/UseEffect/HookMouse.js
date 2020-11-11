import React, { useState, useEffect } from 'react';

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect callled')
        window.addEventListener('mousemove', logMousePosition)

        // cleanup
        return () => {
            console.log('component ummounting')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse;