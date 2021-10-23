const axios = require('axios');

function sendPic(data) {
    // Make a request for a user with a given ID

    console.log(data);

    axios.get('http://127.0.0.1:8000/healthcheck')
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

export default sendPic;


