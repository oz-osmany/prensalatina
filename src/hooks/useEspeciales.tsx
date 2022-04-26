import { useEffect, useState } from 'react';



export const useEspeciales=()=>{
    const [especiales, setEspeciales] = useState([])
    
      useEffect(() => {
  
          getEspeciales()
      }, []) 
      const getEspeciales=()=>{
      // const convert = require('xml-js-pro');
        
      
      }
    return especiales
    
}
    