const menu_test_reports = require("./menu_test_reports");
// const { save_appo } = require("../utilities/appointment_api");

module.exports = {
  menu_option_handler(agent) {
    let menu_option = agent.parameters.menu_option;
    let message = "";
    mobile = agent.context.inputContexts.menu_option.parameters.mobile
    console.log("menu_option - mobile", mobile)
    // mobile = agent.context.inputContexts.welcomecontext.parameters.mobile
    console.log('menu_option_log', agent.context.inputContexts)
    // for (context of agent.contexts) {
    //   agent.context.delete(context.name);
    // }
    switch (menu_option) {
      case 1:
        // message += "What is your firstname?";
        message += "Please enter your *Name*?";
        // agent.context.set("firstname", 2, {
        //   test_type: "COVID",
        //   mobile: mobile,
        // });
        // agent.add(message);
        module.exports.set_contexts(agent, "menu_option", "firstname", {
          mobile: mobile,
          test_type: "COVID"
        });
        // return new Promise(function(resolve, reject) {
        //   var http = require("http");
        //   var options = {
        //     "method": "POST",
        //     "hostname": "grha.space",
        //     "port": null,
        //     "path": "/dailybot-diagnosis/api/appointment/saveUpdateAppointment",
        //     "headers": {
        //       "content-type": "application/json",
        //       "cache-control": "no-cache",
        //       "postman-token": "254d1587-42ad-32a7-1e0a-dc92905632bf"
        //     }
        //   };

        //   var req = http.request(options, function (res) {
        //     var chunks = [];

        //     res.on("data", function (chunk) {
        //       chunks.push(chunk);
        //     });

        //     res.on("end", function () {
        //       var body = Buffer.concat(chunks);
        //       console.log(body.toString());
        //     });
        //   });

        //   req.write(JSON.stringify({ test_type: 'covid', mobile: mobile }));
        //   agent.add(message);
        //   req.end();

        // });
        break;

      case 2:
        // message += "What is your firstname?";
        message += "Please enter your *Name*?";
        // agent.context.set("firstname", 2, {
        //   test_type: "BLOOD",
        //   mobile: mobile,
        // });
        // agent.add(message);
        module.exports.set_contexts(agent, "menu_option", "firstname", {
          mobile: mobile,
          test_type: "BLOOD"
        });
        // return new Promise(function(resolve, reject) {
        //   var http = require("http");
        //   var options = {
        //     "method": "POST",
        //     "hostname": "grha.space",
        //     "port": null,
        //     "path": "/dailybot-diagnosis/api/appointment/saveUpdateAppointment",
        //     "headers": {
        //       "content-type": "application/json",
        //       "cache-control": "no-cache",
        //       "postman-token": "254d1587-42ad-32a7-1e0a-dc92905632bf"
        //     }
        //   };

        //   var req = http.request(options, function (res) {
        //     var chunks = [];

        //     res.on("data", function (chunk) {
        //       chunks.push(chunk);
        //     });

        //     res.on("end", function () {
        //       var body = Buffer.concat(chunks);
        //       console.log(body.toString());
        //     });
        //   });

        //   req.write(JSON.stringify({ test_type: 'blood', mobile: mobile }));
        //   agent.add(message);
        //   agent.add("hello");
        //   req.end();

        // });
        break;

      case 3:
        message += "Sorry. No reports found...";
        agent.add(message);
        // let message = "";
        // module.exports.set_contexts(agent, "menu_option", "get_reports_by_id", {
        //   date: updated_test_date,
        // });
        // return new Promise(function(resolve, reject) {


        //   var request = require("request");

        //   var options = { method: 'POST',
        //     url: 'http://grha.space/dailybot-diagnosis/api/appointment/getAppointmentReport',
        //     headers: 
        //      { 'postman-token': 'c1668eb9-7bce-057c-0a3d-23ce467c6438',
        //        'cache-control': 'no-cache',
        //        'content-type': 'application/json' },
        //     body: { mobile: '919996906296' },
        //     json: true };

        //   res = request(options, function (error, response, body) {
        //     if (error) throw new Error(error);
        //     console.log(body);
        //     return body
        //     // agent.add(body.toString());
        //   });
        //   res
        //   console.log("response", res)
        //   agent.add(res.toString());
          // var http = require("http");
          // var options = {
          //   "method": "POST",
          //   "hostname": "grha.space",
          //   "port": null,
          //   "path": "/dailybot-diagnosis/api/appointment/getAppointmentReport",
          //   "headers": {
          //     "content-type": "application/json",
          //     "cache-control": "no-cache",
          //     "postman-token": "6715a2ad-1f8c-09fc-ea5c-2fd272f34a18"
          //   }
          // };

          // var req = http.request(options, function (res) {
          //   var chunks = [];

          //   res.on("data", function (chunk) {
          //     chunks.push(chunk);
          //   });

          //   res.on("end", function () {
          //     var body = Buffer.concat(chunks);
          //     console.log(body.toString());
          //     // agent.add(body.toString());
          //   });
          // });

          // req.write(JSON.stringify({ mobile: '919996906296' }));
          // console.log(req)
          // agent.add(req.toString());
          // req.end();
        // });
        break;

      default:
        message += "Please select an option in the range 1,2, or 3.";
        agent.add(message);
    }

    
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
