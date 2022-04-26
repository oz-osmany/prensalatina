import { useEffect, useState } from 'react';
import axios from 'axios';

import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosRadio:PostCategory[];
 
}
interface DatosOnline{
  datosRadioOnline:PostCategory[];
 
}

export const useRadio=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(3);
  
  useEffect(() => {
    handleClick()
  }, []);
  
    // 
 

  const handleClick = async () => {
    axios.get(`https://radio.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=informativos&per_page=${pageNumber}`
    ).then(response => {
      setPageNumber(pageNumber+2);
      setArticles(response.data);
    });
  }

  
  return {articles,handleClick}

    
}
    
 export const useRadioDiez=()=>{
  const [africaLimit, setAfricaLimit] = useState<Datos>({
    datosRadio:[]
    
  })
    
      useEffect(() => {
  
          getAfrica()
      }, []) 
      const getAfrica=async()=>{
        const res=await axios("https://radio.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=informativos&per_page=10");
        
         setAfricaLimit({
          datosRadio: res.data
         
        }) 
        //  ;
      }
      // 
    return {...africaLimit}
    
} 
 export const useRadioOnline=()=>{
  const [radionline, setRadioNline] = useState<DatosOnline>({
    datosRadioOnline:[]
    
  })
    
      useEffect(() => {
  
          getAfrica()
      }, []) 
      const getAfrica=async()=>{
        const res=await axios("https://cdn4.onstream.audio:9267/stream");
        
        setRadioNline({
          datosRadioOnline: res.data
         
        }) 
        //  ;
      }
      // 
    return {...radionline}
    
} 

