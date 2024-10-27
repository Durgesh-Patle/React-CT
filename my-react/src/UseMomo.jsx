import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const UseMomo = () => {
    let [count, setCount] = useState(0);

    //    ye code react ko slow bna deta he .
    //    let sum=0;
    //    for(let i=0;i<1000;i++){
    //     sum+=i;
    //    }


    // Used UseMemo Hook.

   let momovalue= useMemo(() => {
        function cal() {
            let sum = 0;
            for (let i = 0; i < 1000; i++) {
                sum += i;
            }
            return sum;
        }
        return cal();
    },[])



    return (
        <div>
            <h1>{momovalue}</h1>
            {/* <h1>{sum}</h1> */}
            <button onClick={() => { setCount(count + 1) }}>{count} Click</button>
        </div>
    )
}

export default UseMomo
