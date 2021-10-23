// Media Handler class
import React from "react";
import sendPic from "../model/camera_detection"

class AppStreamCam extends React.Component {
    constructor(props) {
      super(props);
      this.streamCamVideo= this.streamCamVideo.bind(this);
      this.showPic = this.showPic.bind(this);

      this.state = {
        img: ''
      }

      this.streamCamVideo()
    }
    streamCamVideo() {
      var constraints = { audio: true, video: { width: 1280, height: 720 } };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(mediaStream) {
          var video = document.querySelector("video");
  
          video.srcObject = mediaStream;
          video.onloadedmetadata = function(e) {
            video.play();
          };
        })
        .catch(function(err) {
          console.log(err.name + ": " + err.message);
        }); // always check for errors at the end.
    }

    showPic() {
        var video = document.querySelector("video");

        var canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d')
                .drawImage(video, 0, 0, canvas.width, canvas.height);
        this.setState( {
            img: canvas.toDataURL()
        })

        this.sendPic();
    }

    sendPic() {
        sendPic(this.state.img);
    }

    render() {
      return (
        <div>
          <div id="container">
            <video muted ={true} autoPlay={true} id="videoElement" onTimeUpdate={this.showPic}></video> 
          </div>
          <br/>
          <button onClick={this.showPic}>Take Picture</button>
        </div>
      );
    }
  }
export default AppStreamCam;