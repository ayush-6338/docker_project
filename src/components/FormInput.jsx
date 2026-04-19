import React, { useRef } from 'react'

const FormInput = ({addData}) => {
  let inputImg=useRef();
  let inputTitle=useRef();
  let inputAut=useRef();
  let inputGener=useRef();
  function handleClick(){
    let data={
      image:inputImg.current.value,
      title:inputTitle.current.value, 
      aut:inputAut.current.value,
      gener:inputGener.current.value
    }
    addData(data);
    }
  return (
    <div>
      
      <div className='flex flex-col w-1/4 gap-3 '>
        <input type="file" className='border rounded border-black' ref={inputImg}/>
        <input type="text" placeholder="Title Name" className='border rounded border-black' ref={inputTitle}/>
        <input type="text" placeholder="Author Name" className='border rounded border-black' ref={inputAut}/>
        <select ref={inputGener} className='border rounded border-black'>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="romance">Romance</option>
          <option value="mystrey">Mystrey</option>
        </select>
        <button onClick={handleClick} className='bg-blue-500 text-white rounded p-2 mt-2'>Submit</button>
        </div>
    </div>
  )
}

export default FormInput
