import { array } from "prop-types";
import { useHistory } from "react-router-dom";
const axios = require('axios');

var count = 0;



async function sendPic(data) {
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

    return axios.post('http://127.0.0.1:8000/process_frames', p_data)
    .then(function (response) {
      // handle success
      const data = JSON.parse(response.data)

      const option = data["0"]

      return option

      // if (option == '')
      // history.push("/home")

    })
}

function sendbarCode(data) {

  if (count == 5) {
    let p_data = {
      "img": '',
    }
  
  p_data["img"] = data[data.length - 1];
  
  const send_data = JSON.stringify(p_data)
  count = 0
  return axios.post('http://127.0.0.1:8000/barcode', p_data)
  .then(function (response) {
    // handle success
    const data = JSON.parse(response.data)

    const item_name = data["item_name"]
    const price = data["price"]

    console.log(data)

    return data
  });
  } else {
    count = count + 1;

    const myPromise = new Promise((resolve, reject) => {
        resolve(null)
    });
    return myPromise
  }

}

export {sendPic, sendbarCode};