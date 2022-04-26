import axios from 'axios';
import { useEffect, useState } from 'react';
import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosNorteamerica:PostCategory[];
}
export const useNorteamerica=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(5);
  
  useEffect(() => {
      
    handleClick()
  }, []) 

  const handleClick = async () => {
    
    axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=norteamerica&per_page=${pageNumber}`
    ).then(response => {
      setPageNumber(pageNumber+5);
      setArticles(response.data);
    });
  };

 
   
    return {articles,handleClick}
    
}
export const useNorteamericaLimit=()=>{
  const [norteamericaLimit, setNorteamericaLimit] = useState<Datos>({
    datosNorteamerica:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=norteamerica&per_page=4");
      
      setNorteamericaLimit({
        datosNorteamerica: res.data,
      })
      //  console.log(a
    }
  return {...norteamericaLimit}
  
}      
export const useNorteamericaUna=()=>{
  const [norteamericaLimit, setNorteamericaLimit] = useState<Datos>({
    datosNorteamerica:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=norteamerica&per_page=10");
      
      setNorteamericaLimit({
        datosNorteamerica: res.data,
      })
      //  console.log(a
    }
  return {...norteamericaLimit}
  
}      