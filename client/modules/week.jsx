import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Day from './day';

const Week = () => {
    const weekDay = {
        0: ' Monday',
        1: ' Tuesday',
        2: ' Wednesday',
        3: ' Thursday',
        4: ' Friday',
        5: ' Saturday',
        6: ' Sunday'
    }
    const week = []
    for (let x=0; x< 7; x++){
        week.push(
            <Day key={x} info={weekDay[x]}/>
        )
    }

    return (
    <div >

        <div className="week">

        {week}
        </div>
    </div>
    )
};
export default Week