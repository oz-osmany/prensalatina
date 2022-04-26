import axios from 'axios';
import { useEffect, useState } from 'react';
import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosDeporte:PostCategory[];
}
export const useDeportes=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  
  useEffect(() => {
      
    handleClick()
  }, []) 

  const handleClick = async () => {
    axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=deportes&per_page=${pageNumber}`
      ).then(response => {
        setPageNumber(pageNumber+5);
        setArticles(response.data);
      });
  };

   
    return {articles,handleClick}
    
}
export const useDeportesLimit=()=>{
    const [deporteLimit, setDeporteLimit] = useState<Datos>({
      datosDeporte:[]
    })
    //axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/?categories=29&per_page=4");
      useEffect(() => {
  
          getDeporte()
      }, []) 
      const getDeporte=async()=>{
        const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=deportes&per_page=4");

        
        setDeporteLimit({
          datosDeporte: res.data
        })
        //  console.log(a
      }
    return {...deporteLimit}
    
}
export const useDeportesUna=()=>{
    const [deporteLimit, setDeporteLimit] = useState<Datos>({
      datosDeporte:[]
    })
    //axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/?categories=29&per_page=4");
      useEffect(() => {
  
          getDeporte()
      }, []) 
      const getDeporte=async()=>{
        const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=deportes&per_page=10");

        
        setDeporteLimit({
          datosDeporte: res.data
        })
        //  console.log(a
      }
    return {...deporteLimit}
    
}
    