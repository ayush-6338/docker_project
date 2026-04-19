import React from 'react'
import FormInput from './FormInput'
import Output from './Output'

const Form = ({append,data,handleDelete}) => {
  return (
    <div>
      <FormInput addData={append} />
      <Output data={data} handleDelete={handleDelete}/>
    </div>
  )
}

export default Form
