var lookup = require("india-pincode-lookup");
const emojis = require("../utilities/emojis");

module.exports = {
  send_res(agent) {
    let message = "";
    mobile = agent.context.inputContexts.pincode.parameters.mobile
    console.log("pincode", agent.parameters.pincode, "mobile", mobile)
    var pincode_info = lookup.lookup(agent.parameters.pincode);
    if (pincode_info.length == 0) {
      console.log("Invalid Pincode!");
      agent.context.set("pincode", 2);
      agent.add("Please enter a valid pincode of 6 digit. for e.g. 110025");
      return;
    }
    message += "We have recorded your area as ";
    message += pincode_info[0].taluk + ", ";
    message += pincode_info[0].districtName + ", ";
    message += pincode_info[0].stateName + ".\n";

    message += "Please tell your detailed postal address.";
    //message += module.exports.tip_message();

    module.exports.set_contexts(agent, "pincode", "postal_address", {
      pincode: agent.parameters.pincode,
      taluk: pincode_info[0].taluk,
      district: pincode_info[0].districtName,
      state: pincode_info[0].stateName,
    });
    agent.add(message);
    return new Promise(function(resolve, reject) {
      var http = require("http");
      var options = {
        "method": "POST",
        "hostname": "grha.space",
        "port": null,
        "path": "/dailybot-diagnosis/api/appointment/saveUpdateAppointment",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "254d1587-42ad-32a7-1e0a-dc92905632bf"
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

      req.write(JSON.stringify({ test_type: agent.context.inputContexts.pincode.parameters.test_type, mobile: mobile, pincode:  agent.parameters.pincode}));
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

  tip_message() {
    let msg = "\n\n" + emojis.idea;
    msg += "*Tip :* You can re-enter pincode if you've entered a wrong one";
    return msg;
  },
};
