import React, {Component} from "react";

const Creator = () => {

    return (
        <div>
            <form>
                <label htmlFor="">Choose a Day: </label>
                <select id='day'>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">uesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>
                <label for="lname">Event description:</label><br></br>
                <input type="text" id="lname" name="lname"/>
                <button>Submit</button>
            </form>
        </div>
        // <p>pop</p>
    )
}

export default Creator;