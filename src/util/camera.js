function drawImge() {
    var video = document.querySelector("video");
    var canvas = document.querySelector("#videoCanvas");
    var ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;


    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    var faceArea = 300;
    var pX=canvas.width/2 - faceArea/2;
    var pY=canvas.height/2 - faceArea/2;

    ctx.rect(pX,pY,faceArea,faceArea);
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";    
    ctx.stroke();

    setTimeout(drawImge , 1);
}

export default drawImge;