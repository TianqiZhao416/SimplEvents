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

const App = () => (
    <div id="app">
        <p>rendering app</p>
        <Creator/>
        <Week/>

    </div>
  );
export default App