import React from 'react';

const Joke = ({ type, joke, setup, delivery }) => {

  return ( <div>

    <span>
      {type === 'single' 
      ? <div> <h3> Single Part Joke</h3>
        <p> {joke} </p>
        </div>
      : <div> <h3>Two Part Joke </h3>
        <p> {setup}</p>  <p> {delivery} </p>
        
        </div> } 
    </span>

  </div> 
  );
}

export default Joke;


