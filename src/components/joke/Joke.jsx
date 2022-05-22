import React from 'react';
import styles from '../jokes/Jokes.module.css';
const Joke = ({ type, joke, setup, delivery }) => {
  const color = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };

  return ( 
  <div
  className={styles.jokeContainer}
  style ={{color:color()}}
  >
    <span>
      {type === 'single' 
      ? <div>
         <h3 className={styles.onePartJokeHeader}> single part joke</h3>
        <p className={styles.paraFirstPart}> {joke} </p>
        </div>
      : <div> <h3 className={styles.twoPartJokeHeader}>two part joke </h3>
        <p className={styles.paraFirstPart}> {setup}</p>  <p className={styles.paraSecondPart}> {delivery} </p>
        
        </div> } 
    </span>

  </div> 
  );
}

export default Joke;


