import axios from 'axios';
import { useEffect, useState } from 'react';
import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosSuramerica:PostCategory[];
}
export const useSurAmerica=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(5);
 
  useEffect(() => {
      
    handleClick()
  }, []) 

  const handleClick = async () => {
    
    axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=suramerica&per_page=${pageNumber}`
    ).then(response => {
      setPageNumber(pageNumber+5);
      setArticles(response.data);
    });
  };

  
   
    return {articles,handleClick}
    
}

export const useSuramericaLimit=()=>{
  const [surLimit, setSurLimit] = useState<Datos>({
    datosSuramerica:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=suramerica&per_page=4");
      
      setSurLimit({
        datosSuramerica: res.data,
      })
      //  console.log(a
    }
  return {...surLimit}
  
}  
export const useSuramericaUna=()=>{
  const [surLimit, setSurLimit] = useState<Datos>({
    datosSuramerica:[],
  })
  
    useEffect(() => {

        getAfrica()
    }, []) 
    const getAfrica=async()=>{
      const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/rutageografica?name=suramerica&per_page=10");
      
      setSurLimit({
        datosSuramerica: res.data,
      })
      //  console.log(a
    }
  return {...surLimit}
  
}  