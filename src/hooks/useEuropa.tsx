import axios from 'axios';
import { useEffect, useState } from 'react';
import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosEuropa:PostCategory[];
}
export const useEuropa=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(5);
  
  useEffect(() => {
      
    handleClick()
  }, []) 

  const handleClick = async () => {
    axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=europa&per_page=${pageNumber}`
      ).then(response => {
        setPageNumber(pageNumber+5);
        setArticles(response.data);
      });
  };

 
   
    return {articles,handleClick}
    
}
export const useEuropaLimit=()=>{
  const [europaLimit, setEuropaLimit] = useState<Datos>({
    datosEuropa:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=asia-oceania&per_page=4");
      
      setEuropaLimit({
        datosEuropa: res.data,
      })
      //  console.log(a
    
    }
  return {...europaLimit}
  
}     
export const useEuropaUna=()=>{
  const [europaLimit, setEuropaLimit] = useState<Datos>({
    datosEuropa:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=europa&per_page=10");
      
      setEuropaLimit({
        datosEuropa: res.data,
      })
      //  console.log(a
    
    }
  return {...europaLimit}
  
}     