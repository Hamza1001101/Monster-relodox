import React, { useState } from 'react'

const Main = () => {

    const [counter, setCounter] = useState(0)

    const [decreaser, setDecreaser] = useState(0)
    
    function decreaseHandler() {
        if(decreaser < 0) return
        setDecreaser(decreaser-1)
    }


    const handleClick = () => {
        if(counter === 10) return
        setCounter(counter+1)
    }

    return (
        <div>
            <h2>hello from Main-component</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque accusantium numquam dignissimos sint
                in sed optio atque eius? Cum, saepe.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium, amet possimus placeat hic enim reprehenderit dicta, quia officia nisi saepe quasi odio suscipit quo. Ipsa, minima! Dolores in atque perspiciatis delectus neque itaque facilis debitis consequatur! Nemo?</p>
            <h1> {counter} </h1>
            <button onClick={handleClick} style={{cursor: 'pointer'}}>  Add + </button>
        </div>
    )
}
export default Main