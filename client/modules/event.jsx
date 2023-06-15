import React, {Component} from "react";

const Event = (props) =>{
    const deleteThis = () =>{

    }

    return (
        <div className="events">
            -{props.description}   
            {/* {props.info.} */}
        </div>
    )
}

export default Event;