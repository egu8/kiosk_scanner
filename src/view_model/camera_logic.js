// Media Handler class
import React from "react";
import sendPic from "../model/camera_detection"

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
      var constraints = { audio: true, video: { width: 112, height: 112 } };
      
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(mediaStream) {
          var video = document.querySelector("video");
          
          var frames = []
          function drawImge() {
            var video = document.querySelector("video");
            var canvas = document.querySelector("#videoCanvas");
            var ctx = canvas.getContext('2d');
        
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
        
        
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            frames = [...frames, canvas.toDataURL()]
        
            var faceArea = 300;
            var pX=canvas.width/2 - faceArea/2;
            var pY=canvas.height/2 - faceArea/2;
        
            ctx.rect(pX,pY,faceArea,faceArea);
            ctx.lineWidth = "6";
            ctx.strokeStyle = "red";    
            ctx.stroke();
        
            setTimeout(drawImge , 1);
        }
          video.onplay = function() {
            setTimeout(drawImge , 1);
           }

          video.srcObject = mediaStream;

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