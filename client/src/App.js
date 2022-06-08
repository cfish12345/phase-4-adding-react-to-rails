import { useState, useEffect } from "react";



function App() {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, []);

  console.log(movies)
  
  return <h1>Hello from React!</h1>;
}

export default App;