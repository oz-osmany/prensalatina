import { useEffect, useState } from 'react';
import axios from 'axios';

import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosAfrica:PostCategory[];
 
}

export const useVideo=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(2);
  
  useEffect(() => {
    handleClick()
  }, []);
  
    // 
 

  const handleClick = async () => {
    axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/pltv?name=prensa-latina-tv&per_page=${pageNumber}`
    ).then(response => {
      setPageNumber(pageNumber+2);
      setArticles(response.data);
    });
  }

  
  return {articles,handleClick}

    
}
    
 export const useAfricaUna=()=>{
  const [africaLimit, setAfricaLimit] = useState<Datos>({
    datosAfrica:[]
    
  })
    
      useEffect(() => {
  
          getAfrica()
      }, []) 
      const getAfrica=async()=>{
        const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=africa-medio-oriente&per_page=10");
        
         setAfricaLimit({
          datosAfrica: res.data
         
        }) 
        //  ;
      }
      // 
    return {...africaLimit}
    
} 
 export const useAfricaLimit=()=>{
  const [africaLimit, setAfricaLimit] = useState<Datos>({
    datosAfrica:[]
    
  })
    
      useEffect(() => {
  
          getAfrica()
      }, []) 
      const getAfrica=async()=>{
        const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=africa-medio-oriente&per_page=4");
        
         setAfricaLimit({
          datosAfrica: res.data
         
        }) 
        //  ;
      }
      // 
    return {...africaLimit}
    
} 

