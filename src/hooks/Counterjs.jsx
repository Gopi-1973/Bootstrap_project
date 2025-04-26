import React, { useEffect, useState } from 'react'

const Counterjs = () => {
    const [num, setNum] = useState(0)

    const decrease = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }

    useEffect(()=>{
        alert("State Changed")
    }, [])
    return (

        <div>
            <h1>This intial state is {num} </h1>

            {/* <button className='btn btn-primary me-3' onClick={()=>setNum(num+1)}>Increase</button> */}

            {

                num < 10 && <button className='btn btn-primary me-3' onClick={() => setNum(num + 1)}>Increase</button>
            }

            <button className='btn btn-success me-3' onClick={() => setNum(num + 1)}>Reset</button>


            {
                num > 0 && <button className='btn btn-danger' >Decrease</button>

            }


        </div>

    )
}

export default Counterjs
