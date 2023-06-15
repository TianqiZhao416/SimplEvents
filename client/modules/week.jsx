import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Day from './day';

const Week = () => {
    const week = []
    for(let x=0; x< 7; x++){
        week.push(
            <Day/>
        )
    }

    return (
    <div >
        <p>rendering week</p>
        <div className="week">
        {week}
        </div>
    </div>
    )
};
export default Week