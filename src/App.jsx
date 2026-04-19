import React,{useState} from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  let [data,setData]=useState([]);
  function addData(cur){
    setData((old)=>[cur,...old]);
  }
  function handleDelete(ind){
    setData((old)=>old.filter((value,index)=>index!==ind));
  }
  return (
    <div>
      <Navbar />
      <Form append={addData} data={data} handleDelete={handleDelete}/>
      <Footer/>
    </div>
  )
}

export default App
