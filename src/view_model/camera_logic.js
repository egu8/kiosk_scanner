// Media Handler class
import React from "react";


class AppStreamCam extends React.Component {
    constructor(props) {
      super(props);
      this.streamCamVideo= this.streamCamVideo.bind(this);
      this.showPic = this.showPic.bind(this);
      this.yeet = this.yeet.bind(this);

      this.state = {
        img: ''
      }
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
    }

    takePic() {
        const img = document.getElementById("my-screenshot");
        img.setAttribute("src", this.state.img);
    }
    render() {
      return (
        <div>
          <div id="container">
            <video autoPlay={true} id="videoElement" controls></video> 
          </div>
          <img id="my-screenshot" alt="pain"/>
          <br/>
          <button onClick={this.streamCamVideo}>Start streaming</button>
          <button onClick={this.showPic}>Take Picture</button>
          <button onClick={this.takePic}>Show Picture</button>
        </div>
      );
    }
  }
export default AppStreamCam;