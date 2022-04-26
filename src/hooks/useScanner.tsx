import axios from 'axios';
import { useEffect, useState } from 'react';

import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosScanner:PostCategory[];
}
export const useScanner=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(3);
  
  
  useEffect(() => {
      
    handleClick()
  }, []) 

  const handleClick = async () => {
    axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=escaner&per_page=${pageNumber}`
    ).then(response => {
      setPageNumber(pageNumber+3);
      setArticles(response.data);
    });
  
  };

   
    return {articles,handleClick}
    
}

// export const useSuramericaLimit=()=>{
//   const [surLimit, setSurLimit] = useState<Datos>({
//     datosScanner:[],
//   })
  
//     useEffect(() => {

//         getAfrica()
//     }, []) 
//     const getAfrica=async()=>{
//       const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/?ruta-geografica=21&per_page=4");
      
//       setSurLimit({
//         datosScanner: res.data,
//       })
//       //  console.log(a
//     }
//   return {...surLimit}
  
// }  