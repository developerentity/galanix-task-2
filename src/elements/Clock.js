import React, { useEffect, useState } from 'react'


const Clock = () => {

    const options = { year: '2-digit', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    const [time, setTime] = useState(new Date().toLocaleString([], options))

    const tick = () => setTime(new Date().toLocaleString([], options))

    useEffect(() => {
        let timerId = setInterval(
            () => tick(),
            1000
        )
        return () => clearInterval(timerId)
    }, [time])

    return (
        <div className='clock'>
            {time}
        </div>
    );
}

export default Clock