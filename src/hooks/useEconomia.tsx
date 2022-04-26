import axios from 'axios';
import { useEffect, useState } from 'react';

import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosEconomia:PostCategory[];
}

export const useEconomia=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  
  useEffect(() => {
      
    handleClick()
  }, []) 

  const handleClick = async () => {
    axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=economia&per_page=${pageNumber}`
    ).then(response => {
      setPageNumber(pageNumber+5);
      setArticles(response.data);
    });
  };

   
    return {articles,handleClick}
    
}
export const useEconomiaLimit=()=>{
  const [economiaLimit, setEconomiaLimit] = useState<Datos>({
    datosEconomia:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=economia&per_page=4");

      
        setEconomiaLimit({
          datosEconomia: res.data
        })
        //  console.log(a
    }
  return {...economiaLimit}
  
}    
export const useEconomiaUna=()=>{
  const [economiaLimit, setEconomiaLimit] = useState<Datos>({
    datosEconomia:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=economia&per_page=10");

      
        setEconomiaLimit({
          datosEconomia: res.data
        })
        //  console.log(a
    }
  return {...economiaLimit}
  
}    