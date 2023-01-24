import React from "react";
import { FaHandPointer } from "react-icons/fa";

const Lobby = () => {
    return (
        <>
        <div>
            <h1 className="centertext"> Lobby </h1>
        </div>
        <br></br><br></br>
        <div>
            <button className="center" onClick={permissionCheck}>
                <FaHandPointer style={{ paddingRight: '10px', fontSize: '20px', color: '#fff' }}/>
                Let Go!! 
             </button>
        </div>
        </>
    );
}

export default Lobby;

function permissionCheck(event){
    navigator.permissions.query({ name: 'camera' }).then(result => {
        if(result.state === 'granted'){
            console.log("pass");
            window.location.href = '/opencamera';
        }else if (result.state === 'prompt') {
            console.log("denied");
            window.location.href = '/request';           
          }
    })
}