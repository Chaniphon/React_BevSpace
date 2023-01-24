import React, { useRef, useEffect } from 'react';
import { IoCameraReverseSharp } from "react-icons/io5";

let front = false;
  
export default function Camera() {
  
  let stream, image, video;
  
  const videoRef = useRef(null);
  useEffect(() => {
    enableStream();
  });

  async function enableStream() {
    try {
      stream = await navigator.mediaDevices.getUserMedia( 
        mediaOption() );
        video = videoRef.current;
        video.srcObject = stream;
        video.autoPlay=true;
        const track = stream.getVideoTracks()[0];
        image = ImageCapture(track);

    } 
    catch (error) {
      console.log(error)
    }
  }

  function mediaOption() {
    const constraints = {
      audio: false,
      video: {
        width: 520,
        height: 510,
        facingMode: front ? "user" : "environment",
        frameRate: 60,
        mirror: true,
    }
  }; return constraints;
}

  function switchCam() {
    console.log( "Switch");
    console.log(front);
    console.log(mediaOption());
    front = !front;
    
    console.log(front);
    stream.getTracks().forEach(function(track) {
      track.stop();
    });
    enableStream();
    console.log(mediaOption());

  }

  function takeScreen() {
    console.log("Screenshot taken");
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.drawImage(video, 0, 0);
    const data = c.toDataURL("image/png");
    c.setAttribute("src", data);
  }

  function retake() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, c.width, c.height);
    const data = c.toDataURL("image/png");
    c.setAttribute("src", data);
  }

  return (
  <>
  <div>
    <video 
      ref={videoRef} 
      autoPlay={true} 
      playsInline={true} 
      muted={true}/>

      {/* <button id="btn" onClick={switchCam}> switch </button> */}
    <center>
      <IoCameraReverseSharp className='switch' id="btn" onClick={switchCam}></IoCameraReverseSharp>
    </center>

    <div>
      <button className="take" id="takescreen" onClick={takeScreen}> Capture Image </button>
    </div>
    
    <div>
      <button className="retake" id="retake" onClick={retake}> Retake </button>
    </div>    

    <div>
      <canvas className="displayimg" id="canvas" width={520} height={510}></canvas>
    </div>
  </div>
  </>
  );
}
  
    
    



