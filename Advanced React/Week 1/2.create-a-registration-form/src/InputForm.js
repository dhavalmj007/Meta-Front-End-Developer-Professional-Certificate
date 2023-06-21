import {useRef, useState} from 'react'

const InputForm = () => { 
    const [value, setValue] = useState(""); 
   
    const handleChange = (e) => { 
        e.preventDefault()
        setValue(e.target.value) 
        console.log(value)
    } 
   
    return ( 
      <form onSubmit={(e)=>e.preventDefault()}> 
        <input 
          value={value} 
          onChange={handleChange} 
          type="text" 
        /> 
      </form> 
    ); 
   }; 

   export default InputForm