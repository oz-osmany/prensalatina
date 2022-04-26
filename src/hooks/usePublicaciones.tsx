
import axios from 'axios';
import { useEffect, useState } from 'react';

export const usePublicaciones=()=>{
    const [publica, setPublic] = useState([])
    
      useEffect(() => {
  
          getPublica()
      }, []) 
      const getPublica=async()=>{
        const res=await axios("http://localhost:3000/api/28")
        setPublic(res.data)
    //   console.log(publica);
      
      }
    return  publica

    
}
    