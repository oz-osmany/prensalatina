import axios from 'axios';
import { useEffect, useState } from 'react';
import { PostCategory } from '../interfaces/Posts';

interface Datos{
  datosNota:PostCategory[];
}
export const useNotaInformativa=()=>{
  const [articles, setArticles] = useState<PostCategory[]>([]);
  const [pageNumber, setPageNumber] = useState(5);
      useEffect(() => {
  
        handleClick()
      }, []) 
      const handleClick=async()=>{
        axios.get(`https://www.prensa-latina.cu/wp-json/wp/v2/posts/terms/category?name=nota-informativa&per_page=1120`
    ).then(response => {
      setPageNumber(pageNumber+5);
      setArticles(response.data);
    });
      }
      return {articles,handleClick}
    
}
// export const useNorteamericaLimit=()=>{
//   const [norteamericaLimit, setNorteamericaLimit] = useState<Datos>({
//     datosNota:[],
//   })
  
//     useEffect(() => {

//         getAfrica()
//     }, []) 
//     const getAfrica=async()=>{
//       const res=await axios("https://www.prensa-latina.cu/wp-json/wp/v2/posts/?categories=28&per_page=2");
      
//       setNorteamericaLimit({
//         datosNota: res.data,
//       })
//       //  console.log(a
//     }
//   return {...norteamericaLimit}
  
// }      