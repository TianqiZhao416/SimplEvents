import React, {Component,useEffect, useState} from "react";
import Event from "./event";
const axios = require('axios')

const Day =  (props) => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
    const getEvents = async () => {
      const day = props.info;
      const data = await fetch("../event", {
        headers: {
          'Content-Type': "application/json",
          'day': day
        }
      });
      const jsonData = await data.json();
    //   console.log(typeof jsonData)
    //   const eventsOfTheDay = jsonData.eventsOfTheDay;
      let eventsArray = [];
        for(let event in jsonData){
            let activity = jsonData[event].description
            console.log(jsonData[event].description)
            eventsArray.push(
                <Event id={event._id} description = {activity}/>
            )
        }
    //   const eventsArray = jsonData.map(event => {
    //     return <Event id={event._id} info={event} />;
    //   });
      setEvents(eventsArray); 
    };
    getEvents();
    },[props.info]);
    
    return (
        <div className="day">
            <p>
                {props.info}

            </p><br/>
            {events}

        </div>
    )
}

export default Day
// events.push(
//     <Event id={1} info={'day'}/>
// )
// const getEvents = async () =>{
//     const day = props.info
//     const data = await fetch('../event', {
//         headers: { 
//             'Content-Type': 'application/json' ,
//             'day': day
//         },
//     })
//     const jsonData = await data.json(); 
//     const eventsOfTheDay = jsonData.eventsOfTheDay; 
//     console.log('i got the data bitch')
//     for(let event of jsonData){
//         // console.log(event)
//         events.push(
//             <Event id={event._id} info={event}/>
//         )
//     }
//     if(events.length>0)console.log(events);
//     }
// getEvents();