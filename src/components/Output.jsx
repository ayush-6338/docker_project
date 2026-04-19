import React from 'react'

const Output = ({data,handleDelete}) => {
    return (
    <>
        {data.map((value , index)=>(
            <div key={index} className="mt-5 bg-amber-600 flex justify-between  p-4 text-2xl text-white">
                <span >{index+1}</span>
                <span >{value.image}</span>
                <span >{value.title}</span>
                <span >{value.aut}</span>
                <span >{value.gener}</span>
                <button className="rounded border bg-amber-50 w-30 text-orange-500 border-black" onClick={()=>handleDelete(index)} >delete</button>
            </div>

        ))}
    </>
  )
}

export default Output
