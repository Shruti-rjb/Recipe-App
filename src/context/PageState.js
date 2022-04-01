import { useEffect,useState } from "react";
import PageContext from "./PageContext";

const PageState =(props)=>{

    const [pages, setPages] = useState([]);

  useEffect(() => {
    getPages();
  }, []);

  const getPages = async () => {

    const check =localStorage.getItem('popular');

    if(check){
      setPages(JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
    

    const data = await api.json();
    localStorage.setItem('popular',JSON.stringify(data.recipes));
    //console.log(data,"recipes")
    setPages(data.recipes);
  }
  };

    return (
        <PageContext.Provider value ={{pages , setPages}} >
        {props.children}
        </PageContext.Provider>
    )
}

export default PageState;