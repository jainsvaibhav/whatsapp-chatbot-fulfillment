module.exports = {
  send_res(agent) {
    let message = "";
    message += "Your PhotoId card back image has been received by us!";
    // message += "\nWe have saved your details and we will start processing";
    // message += " your request and get back to you soon! Have a nice day!";

    adharBackImagePath = agent.context.inputContexts.aadhar_back.parameters.adharBackImagePath,
    mobile = agent.context.inputContexts.aadhar_back.parameters.mobile;
    params = agent.context.inputContexts.aadhar_back.parameters
    
    out = {}
    out.appointmentId = Date.now()
    out.firstname = params.firstname
    out.lastname = params.lastname
    out.date = params.date
    out.time = params.start + " - " + params.end
    out.adharFrontImagePath = params.adharFrontImagePath
    out.adharBackImagePath = params.adharBackImagePath
    out.latitude = params.latitude
    out.longitude = params.longitude
    out.mobile = params.mobile
    out.locationUrl = "https://www.google.com/maps/place/"+params.latitude+","+params.longitude
    out.address = "";
    if(params.location_name || params.address){
      out.address = params.location_name + " " + params.address;
    };

    message += "\n\nYour Appointment Details:"
    message += "\n\n*Name* - " + out.firstname + " " + out.lastname;
    message += "\n\n*Appointment* *No.* - " + out.appointmentId;
    message += "\n\n*Date* - " + out.date;
    message += "\n\n*Time* - " + out.time;
    if(out.address){
      message += "\n\n*Address* - " + out.address;
    }
    message += "\n\nThe sample collector will reach out at the above intented time.\n\nThank You\n\n*Team Forward HealthTech System*";

 
    console.log("final parameters", agent.context.inputContexts.aadhar_back.parameters);
    // agent.context.set("aadhar_back", 2);
    module.exports.set_contexts(agent, "aadhar_back", "covid_done", {
      adharBackImagePath:adharBackImagePath
    });
    console.log("output", out);
    agent.add(message);

//     return new Promise(function(resolve, reject) {
//       console.log("out inside Promise", out)
//       var http = require("http");
//       var options = {
//         "method": "POST",
//         "hostname": "waba.360dialog.io",
//       "port": null,
//       "path": "/v1/messages",
//       "headers": {
//         "content-type": "application/json",
//         'd360-api-key': 'GBTsBmnqxjdaVkH32684hEYgAK',
//           "cache-control": "no-cache",
//       "postman-token": "c737341c-34b0-17df-8ba4-64cd55bbf86d"
//         }
//       };
//       var req = http.request(options, function (res) {
//       var chunks = [];

//       res.on("data", function (chunk) {
//         chunks.push(chunk);
//       });

//       res.on("end", function () {
//         var body = Buffer.concat(chunks);
//         console.log(body.toString());
//       });
//     });

//     req.write(JSON.stringify({ to: out.mobile,
//   type: 'image',
//   recipient_type: 'individual',
//   image: 
//    { link: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
//      caption: 'your-image-caption' } }));
// // agent.add(message);
// req.end();

    // });

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
