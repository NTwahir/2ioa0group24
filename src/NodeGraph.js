import React from 'react'

export default function NodeGraph({ data }) {
    let Array = [1,2,3]
    // data[0].forEach(e => {
    //     Array.push(e)
    // })



    return (
        <div>
            {Array}| | 
            {data[0].fromId}| | 
            {console.log(data)}
        </div>
    )
}
