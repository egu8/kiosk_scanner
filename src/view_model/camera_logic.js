// Media Handler class
import React from "react";
import sendPic from "../model/camera_detection"
import drawImage from "../util/camera";

import cloneDeep from 'lodash/cloneDeep';

class AppStreamCam extends React.Component {
    constructor(props) {
      super(props);
      this.streamCamVideo= this.streamCamVideo.bind(this);

      this.state = {
        imgs: [],
      }

      this.streamCamVideo()
    }
    streamCamVideo() {
      var constraints = { audio: true, video: { width: 1280, height: 720 } };
      
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(mediaStream) {
          var video = document.querySelector("video");
          
          var frames = []
          const scale = 0.1

          var canvas = document.createElement("canvas");
          canvas.width = video.videoWidth * scale ;
          canvas.height = video.videoHeight * scale ;

          function update(){
            canvas.getContext('2d')
            .drawImage(video, 0, 0, canvas.width, canvas.height);
              frames = [...frames, canvas.toDataURL()]

              requestAnimationFrame(update); // wait for the browser to be ready to present another animation fram.       
          }
          video.onplay = function() {
            setTimeout(drawImage , 1);
           }

          video.srcObject = mediaStream;
          video.addEventListener('loadeddata', function() {
            video.play();  // start playing
            update(); //Start rendering
          });

          video.ontimeupdate = function () {
              if (frames.length >= 16) {
                sendPic(frames)
                frames = []
              }
          }

        })
        .catch(function(err) {
          console.log(err.name + ": " + err.message);
        }); // always check for errors at the end.
    }

    render() {
      return (
        <div>
          <div id="container">
            <video style={{width: 1 }} muted ={true} autoPlay={true} id="videoElement"></video> 
            <canvas id="videoCanvas"></canvas>
          </div>
          <br/>
        </div>
      );
    }
  }
export default AppStreamCam;