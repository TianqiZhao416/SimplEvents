import React, {Component} from "react";

const Creator = (props) => {
    // const printchecker=()=>{
    //     const day = document.getElementById('lname')
    //     console.log(day.value)
    // }
    // const day = document.getElementById('day')

    // const eventDescription = document.getElementById('lname')
    // console.log(day.value, eventDescription.value)
    const deleteEvent = () =>{
        fetch('../event', {
            method: 'DELETE',
        })
        .then(res => res.json())
        .catch(err => console.log('favClicked: ERROR: ', err));
    }
    
    const makeEvent = (e) =>{
        // e.preventDefault();
        const day = document.getElementById('day')

        const eventDescription = document.getElementById('lname')
        console.log(day.value, eventDescription.value)
        props.function(day.value, eventDescription.value)
        // let event = {
        //     "day": day.value,
        //     "description": eventDescription.value,
        // }
        // fetch('../event', {
        //     method: 'POST',
        //     body: JSON.stringify(event),
        //     headers: { 'Content-Type': 'application/json' },
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if (Object.keys(data).length <= 1) throw 'Incorrect shape of response';
        //     return data
        // })
        // .catch(err => console.log('favClicked: ERROR: ', err));

    }
    return (
        <div className='eventCreatorForm'>
            <h1>Create an Event!</h1>
            <form className="form">
            <div className="buttons">
                <span>
                <label className="label">Choose a Day:  </label>
                <select id='day' >
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                </span><br/>

                <span>
                <label for="lname">Event description: </label>
                <input type="text" id="lname" name="lname" /><br/>
                </span><br/>
                
                <button onClick={(e)=>makeEvent(e)}>Submit</button>
                <button onClick={(e)=>deleteEvent(e)}>Delete All</button>
                </div>
                
            </form>
        </div>
        // <p>pop</p>
    )
}

export default Creator;