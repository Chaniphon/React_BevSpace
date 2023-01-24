import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";

const Request = () => {
    return (
        <><div>
            <h1 className="centertext"> Lobby </h1>
            <button className="access" onClick={Location}>
                <MdAccessTimeFilled style={{ paddingRight: '5px', fontSize: '22px', color:'fff' }}/> 
                Access your Camera 
            </button>
        </div></>
    );
}

export default Request;

function Location(){
    window.location.href = '/opencamera';
}
