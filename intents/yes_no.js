module.exports = {
  send_res(agent) {
    // let message = "What is the your lastname?";
    let message = "";
    message += "Please tell your detailed postal address.";
    mobile = agent.context.inputContexts.firstname.parameters.mobile
    console.log("firstname mobile", mobile)
    console.log("firstname", agent.parameters.firstname)
    module.exports.set_contexts(agent, "firstname", "postal_address", {
      firstname: agent.parameters.firstname,
    });

    // module.exports.set_contexts(agent, "firstname", "lastname", {
    //   firstname: agent.parameters.firstname,
    // });
    // agent.add(message);
  //   return new Promise(function(resolve, reject) {
  //     var http = require("http");
  //     var options = {
  //       "method": "POST",
  //       "hostname": "grha.space",
  //       "port": null,
  //       "path": "/dailybot-diagnosis/api/appointment/saveUpdateAppointment",
  //       "headers": {
  //         "content-type": "application/json",
  //         "cache-control": "no-cache",
  //         "postman-token": "254d1587-42ad-32a7-1e0a-dc92905632bf"
  //       }
  //     };

  //     var req = http.request(options, function (res) {
  //       var chunks = [];

  //       res.on("data", function (chunk) {
  //         chunks.push(chunk);
  //       });

  //       res.on("end", function () {
  //         var body = Buffer.concat(chunks);
  //         console.log(body.toString());
  //       });
  //     });

  //     req.write(JSON.stringify({ test_type: agent.context.inputContexts.firstname.parameters.test_type, mobile: mobile, first_name:  agent.parameters.firstname}));
  //     agent.add(message);
  //     req.end();

  //   });
  // },

  agent.add(message);

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
