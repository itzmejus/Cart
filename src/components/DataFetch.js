import React, { useEffect, useState } from 'react'

function DataFetch() {
    const [data,setData]=useState([])
    useEffect(()=>{
        const getData= async ()=>{
            const response=await fetch('https://jsonplaceholder.typicode.com/todos')
            const newData= await response.json()
            setData(newData)
        }
        getData()
        console.log('data is',data);
    },[])
  return (
    <div>
        {data.map((item)=>{
            return(
                <div>
                    <h1>{item.name}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default DataFetch