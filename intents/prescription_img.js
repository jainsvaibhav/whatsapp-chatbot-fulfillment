module.exports = {
  send_res(agent) {
    let message = "";
    message += "The images of prescription tests have been received by us!";
    message += " We have saved your details and we will start processing ";
    message += " your request and get back to you soon! Have a nice day!";
    xrImagePath = agent.context.inputContexts.prescription_img.parameters.xrImagePath;
    mobile = agent.context.inputContexts.prescription_img.parameters.mobile;
    // agent.context.set("aadhar_back", 2);
    module.exports.set_contexts(agent, "prescription_img", "blood_done", {
      xrImagePath: xrImagePath,
    });
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

      req.write(JSON.stringify({mobile: mobile, adhar_card_front: xrImagePath, complete_appointment: "Yes"}));
      agent.add(message);
      req.end();

    });
    // agent.add(message);
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
};
