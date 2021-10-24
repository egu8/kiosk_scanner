// Media Handler class
import React from "react";
import { sendPic, sendbarCode } from "../model/camera_detection"

import cloneDeep from 'lodash/cloneDeep';

class AppStreamCam extends React.Component {
    constructor(props) {
      super(props);
      this.streamCamVideo= this.streamCamVideo.bind(this);

      this.state = {
        bar_counter: 0
      }

      this.streamCamVideo()
    }
    streamCamVideo() {
      var constraints = { audio: true, video: { width: 720, height: 720 } };
      
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((mediaStream) => {
          var video = document.querySelector("video");
          
          var frames = []
          function drawImge() {
            var video = document.querySelector("video");
            var canvas = document.querySelector("#videoCanvas1");
            var ctx = canvas.getContext('2d');

            const aspect_ratio = 0.4

            var canvas2 = document.querySelector("#videoCanvas2");
            var ctx2 = canvas2.getContext('2d');
        
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            canvas2.width = video.videoWidth * aspect_ratio;
            canvas2.height = video.videoHeight * aspect_ratio;

            var sw = canvas2.width;
            var sh = canvas2.height;
            var sX=canvas.width/2 - sw/2;
            var sY=canvas.height/2 - sh/2;
        
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            ctx2.drawImage(video, sX, sY, sw, sh, 0, 0, canvas2.width, canvas2.height);

            frames = [...frames, canvas2.toDataURL()]
        
            ctx.rect(sX,sY,sw,sh);
            ctx.lineWidth = "6";
            ctx.strokeStyle = "red";    
            ctx.stroke();

            ctx2.rect(1,1,1,1);
            ctx2.lineWidth = "1";
            ctx2.strokeStyle = "black";    
            ctx2.stroke();
        
            setTimeout(drawImge , 1);
        }
          video.onplay = function() {
            setTimeout(drawImge , 1);
           }

          video.srcObject = mediaStream;

          video.ontimeupdate = function () {
              if (frames.length >= 16) {
                sendPic(frames)
                sendbarCode(frames)
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
            <canvas  id="videoCanvas1"></canvas>
            <canvas  style={{width: 1 }} id="videoCanvas2"></canvas>
          </div>
          <br/>
        </div>
      );
    }
  }
export default AppStreamCam;