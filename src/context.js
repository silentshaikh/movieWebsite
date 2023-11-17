// import { upload } from '@testing-library/user-event/dist/upload';
import React, { createContext,useContext, useEffect, useState } from 'react';
let AppContext = createContext();
export let movApi = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppProv = ({children}) => {
    const [load,upLoad] = useState(true);
    const [movie,upMovie] = useState([]);
    const [err,upError] = useState({show:false,msg:''});
    const [inpValue,upInputValue] = useState('looney');
    const gtMovies = async (api) => {
        upLoad(true);
        try {
            let myFetch = await fetch(api);
            let myData = await myFetch.json();
            console.log(myData)
            if(myData.Response == 'True'){
                upLoad(false);
                upMovie(myData.Search);
                upError({show:false,msg:''});
            }else{
                upError({show:true,msg: myData.Error})
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      let searchTimer =   setTimeout(() => {
            gtMovies(`${movApi}&s=${inpValue}`);
        }, 500);
        return () =>  clearTimeout(searchTimer)
    },[inpValue])
    return(

        <AppContext.Provider value={{load,movie,err,inpValue,upInputValue}}>{children}</AppContext.Provider>
    );
}
const useGlobelContext = () => {
    return useContext(AppContext);
}
export {AppProv,useGlobelContext};
