import React from 'react'
import video from  "../assets/mbaChaiWala.mp4";




const IntroVideo = () => {
  return (
    <div className="intro">
       <video src={video} loop muted autoPlay controlsList='nodownload' ></video>
       <div> </div>
    </div>
  );
}

export default IntroVideo;