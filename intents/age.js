module.exports = {
  send_res(agent) {
    let message = "";
    message += "Please send us your google maps location.";
    if (agent.parameters.age != undefined) {
      if (agent.parameters.age < 1 || agent.parameters.age > 150) {
        agent.context.set("age", 2);
        agent.add("Please enter a valid age!");
        return;
      }
    }
    mobile = agent.context.inputContexts.age.parameters.mobile
    console.log("age", agent.parameters.age, "mobile", mobile)
    console.log(agent.contexts);
    module.exports.set_contexts(agent, "age", "location", {
      age: agent.parameters.age,
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

      req.write(JSON.stringify({ test_type: agent.context.inputContexts.age.parameters.test_type, mobile: mobile, age:  agent.parameters.age}));
    agent.add(message);
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
};
