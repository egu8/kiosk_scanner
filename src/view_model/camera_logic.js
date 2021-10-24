// Media Handler class
import React from "react";
import sendPic from "../model/camera_detection"
import drawImage from "../util/camera";

class AppStreamCam extends React.Component {
    constructor(props) {
      super(props);
      this.streamCamVideo= this.streamCamVideo.bind(this);
      this.showPic = this.showPic.bind(this);

      this.state = {
        imgs: [],
        counter: 0
      }

      this.streamCamVideo()
    }
    streamCamVideo() {
      var constraints = { audio: true, video: { width: 1280, height: 720 } };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(mediaStream) {
          var video = document.querySelector("video");
          
          video.onplay = function() {
            setTimeout(drawImage , 1);
           }

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

        const scale = 0.5

        var canvas = document.createElement("canvas");
        canvas.width = video.videoWidth * scale ;
        canvas.height = video.videoHeight * scale ;
        canvas.getContext('2d')
                .drawImage(video, 0, 0, canvas.width, canvas.height);
        this.setState({
            imgs: [...this.state.imgs, canvas.toDataURL()]
            })
        
        if (this.state.imgs.length === 16) {
            if (this.state.counter === 8) {
              this.sendPic()
              this.setState((state) => ({
                counter:  0
              }));
            } else {
              
              this.setState((state) => ({
                counter:  state.counter + 1
              }));
            }

            this.setState({
              imgs: this.state.imgs.slice(1)
              })
        }
    }

    sendPic() {
        sendPic(this.state.imgs);
        this.setState({
            imgs: this.state.imgs.slice(1)
            })
    }

    render() {
      return (
        <div>
          <div id="container">
            <video style={{width: 1 }} muted ={true} autoPlay={true} id="videoElement" onTimeUpdate={this.showPic} ></video> 
            <canvas id="videoCanvas"></canvas>
          </div>
          <br/>
        </div>
      );
    }
  }
export default AppStreamCam;