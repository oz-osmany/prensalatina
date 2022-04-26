import axios from 'axios';
import { useEffect, useState } from 'react';
import {  PostCategory } from '../interfaces/Posts';


interface Datos{
  datosCultura:PostCategory[];
}
export const useCultura=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  
  useEffect(() => {
      
    handleClick()
  }, []) 

  const handleClick = async () => {
    axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=cuba&per_page=${pageNumber}`
    ).then(response => {
      setPageNumber(pageNumber+5);
      setArticles(response.data);
    });
  };

    return {articles,handleClick}

    
}
export const useCulturaLimit=()=>{
  const [culturaLimit, setCulturaLimit] = useState<Datos>({
    datosCultura:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
     
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=cultura&per_page=4");
      
      setCulturaLimit({
        datosCultura: res.data
      })
      //  console.log(a
    }
  return {...culturaLimit}
  
}    
export const useCulturaUna=()=>{
  const [culturaLimit, setCulturaLimit] = useState<Datos>({
    datosCultura:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
     
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=cultura&per_page=10");
      
      setCulturaLimit({
        datosCultura: res.data
      })
      //  console.log(a
    }
  return {...culturaLimit}
  
}    