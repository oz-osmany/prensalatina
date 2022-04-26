import { useEffect, useState } from 'react';
import axios from 'axios';
import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosOpinion:PostCategory[];
}
export const useOpinion=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(5);
      useEffect(() => {
  
        handleClick()
      }, []) 
      const handleClick=async()=>{
        axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=opinion&per_page=${pageNumber}`
    ).then(response => {
      setPageNumber(pageNumber+5);
      setArticles(response.data);
    });
      }
      return {articles,handleClick}
    
}
    