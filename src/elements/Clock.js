import React, { useEffect, useState } from 'react'


const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleString())
    const tick = () => setTime(new Date().toLocaleString())

    useEffect(() => {
        let timerId = setInterval(
            () => tick(),
            1000
        )
        return () => clearInterval(timerId)
    }, [time])

    return (
        <div className='clock'>
            {time.slice(0, 17)}
        </div>
    );
}

export default Clock