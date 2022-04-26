import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosCuba:PostCategory[];
}

export const useCuba=()=>{
  const [articles, setArticles] =useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(5);
  
  const nextPageUrl = useRef(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=cuba&page=${pageNumber}`);
  
  useEffect(() => {
    handleClick()
  }, []);
  
    // 
 

  const handleClick = async () => {
    axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=cuba&per_page=${pageNumber}`
    ).then(response => {
      setPageNumber(pageNumber+5);
      setArticles(response.data);
    });
  }

  
  return {articles,handleClick}
    
}

 export const useCubaLimit=()=>{
  const [cubaLimit, setCubaLimit] = useState<Datos>({
    datosCuba:[],
  })//=18681
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=cuba&per_page=4");
      // https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=cuba&per_page=10
      
      setCubaLimit({
        datosCuba: res.data
      })
      //  console.log(a
    
    }
  return {...cubaLimit}
  
}     
 export const useCubaUna=()=>{
  const [cubaLimit, setCubaLimit] = useState<Datos>({
    datosCuba:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=cuba&per_page=10");
      // const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts?categories=29&per_page=1");
      
      setCubaLimit({
        datosCuba: res.data
      })
      //  console.log(a
    
    }
  return {...cubaLimit}
  
}     