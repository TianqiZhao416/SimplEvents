import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './stylesheets/styles.css'
// import Characters from './components/Characters';
// import CustomCharacter from './components/CustomCharacter';
import Week from './modules/week';
import Creator from './modules/createEvent';

// const App = props => {

//     <h1>Reacts</h1>

// };

const App = () => {


  const makeEvent = (day, description) =>{


    let event = {
        "day": day,
        "description": description,
    }
    fetch('../event', {
        method: 'POST',
        body: JSON.stringify(event),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => {
        if (Object.keys(data).length <= 1) throw 'Incorrect shape of response';
        return data
    })
    .catch(err => console.log('favClicked: ERROR: ', err));

  }

  return (
    <div id="app">
        <Creator function = {makeEvent}/>
        <Week/>

    </div>
  );
}
export default App