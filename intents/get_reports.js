const helper = require("../utilities/date_helper");
const { evening_slots } = require("./time_of_day");
const emojis = require("../utilities/emojis");


module.exports = {
  send_res(agent) {
    let message = "";
    mobile = agent.context.inputContexts.date.parameters.mobile;
    module.exports.set_contexts(agent, "get_reports", "get_reports_by_id", {
      date: updated_test_date,
    });
    // module.exports.set_contexts(agent, "date", "timeofday", {
    //   date: updated_test_date,
    // });
    return new Promise(function(resolve, reject) {
      var http = require("http");
      var options = {
        "method": "POST",
        "hostname": "grha.space",
        "port": null,
        "path": "/dailybot-diagnosis/api/appointment/getAppointmentReport",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "6715a2ad-1f8c-09fc-ea5c-2fd272f34a18"
        }
      };

      var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
          chunks.push(chunk);
        });

        res.on("end", function () {
          var body = Buffer.concat(chunks);
          console.log(body.toString());
        });
      });

      req.write(JSON.stringify({ mobile: '919996906296' }));
      agent.add(body.toString());
      req.end();
    });
  },

  set_contexts(agent, old_context, new_context, param) {
    let i = agent.contexts.findIndex((x) => x.name == old_context);
    agent.context.set(
      new_context,
      2,
      Object.assign({}, agent.contexts[i].parameters, param)
    );
    agent.context.delete(old_context);
  },
  print_reports() {
    let message = "";
    message += "Please select one of the following reports:";

    message += "\n*1.* 09:00 AM - 01:00 PM";
    message += "\n*2.* 01:00 PM - 04:00 PM";
    message += "\n*3.* 04:00 PM - 07:00 PM";
    // message += "\n*4.* 11:30 AM - 12:00 PM";
    // message += "\n*5.* 12:00 PM - 12:30 PM";
    // message += "\n*6.* 12:30 PM - 1:00 PM";

    message += "Please type a number from *1, 2, and 3* to proceed.";
    // return message;
    
  },
};
