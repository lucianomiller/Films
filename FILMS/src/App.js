import Movie from "./components/Movie";

import React , {useEffect, useState} from "react";
const FEATURED_API= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&query=";

const SEARCH_API= "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies]=useState ([]);
  const [searchTerm, setSearchTerm]=useState ("");

  useEffect(()=>{
    getMovies(FEATURED_API);
    
  },[]);

  const getMovies=(API)=>{
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setMovies(data.results);
    }); 
  }

  const handleOnSubmit=(e)=>{
    e.preventDefault();

    if (searchTerm){
    
      getMovies(SEARCH_API+searchTerm)
      setSearchTerm("");
    }
      

  }

  const handleaOnChange=(e)=>{
    setSearchTerm(e.target.value);

  }
  return (
    <>
      <header> LUCHISPEDIA!
        <form onSubmit={handleOnSubmit}>

        <input className="search"
        type="search"
        placeholder="Search..."
        onChange={handleaOnChange}
        value={searchTerm}/>

        </form>
      </header>
    <div className="movie-container">
      {movies.length > 0 &&
         movies.map((movie) => <Movie key ={movie.id} {...movie} />)}
    </div>
  </>
  )
}

export default App;
