const axios = require("axios");

module.exports = {
  save_appo(params) {
    var url = "http://grha.space/dailybot-diagnosis/api/appointment/";
    url += "saveUpdateAppointment";

    axios
      .post(url, params)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
