import axios from 'axios';
import { useEffect, useState } from 'react';
import {  PostCategory } from '../interfaces/Posts';

interface Datos{
  datosCiencia:PostCategory[];
  
}
export const useCiencia=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(5);
  
  
  useEffect(() => {
      
    handleClick()
  }, []) 

  const handleClick = async () => {

   
      axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=ciencia&per_page=${pageNumber}`
      ).then(response => {
        setPageNumber(pageNumber+5);
        setArticles(response.data);
      });
    
  };

  
   
    return {articles,handleClick}
    
}
export const useCienciaLimit=()=>{
  const [cienciaLimit, setCienciaLimit] = useState<Datos>({
    datosCiencia:[],
 
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=ciencia&per_page=4");
      
      setCienciaLimit({
        datosCiencia: res.data
        
      })
      //  console.log(a
    }
  return {...cienciaLimit}
  
}    
export const useCienciaUna=()=>{
  const [cienciaLimit, setCienciaLimit] = useState<Datos>({
    datosCiencia:[],
 
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=ciencia&per_page=10");
      
      setCienciaLimit({
        datosCiencia: res.data
        
      })
      //  console.log(a
    }
  return {...cienciaLimit}
  
}    