import React, { useEffect, useState } from 'react';
import Joke from '../joke/Joke';
import Loader from "./Loader";


const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [err, setErr] = useState(null);
  const [typee, setType] = useState("");
  

  useEffect(() =>{
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
    .then ((res) => res.json())
    .then((result) => setJokes(result.jokes))
    .catch((err) => setErr(err.message))
  }, [])

if (err !==null){
  return(
    <div>
      Error : {err}
    </div>
  )
}
else {
return (
<div>

{jokes.length > 0 ? (jokes.map((joke => 

      <Joke key={joke.id}
      type={joke.type}
      joke={joke.joke}
      setup={joke.setup}
      delivery={joke.delivery}
     
      />))
  ) : (
    <Loader />
    )
    
    } 
    </div> );
  


};
}

export default Jokes;

