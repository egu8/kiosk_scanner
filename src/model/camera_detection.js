const axios = require('axios');

var count = 0;

function sendPic(data) {
    // Make a request for a user with a given ID

    let p_data = {
        "frame0": '',
        "frame1": '',
        "frame2": '',
        "frame3": '',
        "frame4": '',
        "frame5": '',
        "frame6": '',
        "frame7": '',
        "frame8": '',
        "frame9": '',
        "frame10": '',
        "frame11": '',
        "frame12": '',
        "frame13": '',
        "frame14": '',
        "frame15": '',
    }

    const start = data.length - 16;
    for (let i = 0; i < data.length; i++) {
        const f = "frame" + i;
        p_data[f] = data[i + start]
    }

    const send_data = JSON.stringify(p_data)

    axios.post('http://127.0.0.1:8000/process_frames', p_data)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function sendbarCode(data) {

  if (count == 5) {
    let p_data = {
      "img": '',
    }
  
  p_data["img"] = data[data.length - 1];
  
  const send_data = JSON.stringify(p_data)
  
  axios.post('http://127.0.0.1:8000/barcode', p_data)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  count = 0
  } else {
    count = count + 1;
  }

}

export {sendPic, sendbarCode};