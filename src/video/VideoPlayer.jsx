import React from "react";
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css"; 
import DeadShot from "../video/videos/Vid1.mp4";
import BadBoysII from "../images/jpeg/BadBoysII.jpeg";

const VideoPlayer = () => {
  return (
    <div className="">
      <Player playsInline poster={BadBoysII} fluid={false} width={800}>
        <source src={DeadShot} />
        <ControlBar autoHide={false} />
      </Player>
    </div>
  );
};

export default VideoPlayer;
