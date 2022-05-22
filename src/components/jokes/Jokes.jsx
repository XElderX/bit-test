import React, { useEffect, useState } from 'react';
import styles from './Jokes.module.css';
import Joke from '../joke/Joke';
import Loader from './Loader';


const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [err, setErr] = useState(null);


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
<div
className={styles.Jokes}
>
<h5>&#128517;jokes on you! &#128517; &#9774;</h5>

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

