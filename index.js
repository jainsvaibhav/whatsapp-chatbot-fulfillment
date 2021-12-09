//import intent modules
let menu = require("./intents/menu");
// let yesno = require("./intents/yesno");
// let menu_option = require("./intents/menu_options");
// let menu_option_test = require("./intents/menu_option_test");
// let menu_option_report = require("./intents/menu_option_report");
// let pincode = require("./intents/pincode");
let firstname = require("./intents/firstname");
let lastname = require("./intents/lastname");
// let address = require("./intents/address");
let location_intent = require("./intents/location");
let date = require("./intents/date");
let time_of_day = require("./intents/time_of_day");
let timing_slot = require("./intents/timing_slot");
let aadhar_front = require("./intents/aadhar_front");
let aadhar_back = require("./intents/aadhar_back");
// let prescription_img = require("./intents/prescription_img");
// let test_report = require("./intents/test_report");
// let gender = require("./intents/gender");
// let age = require("./intents/age");

const express = require("express");
const app = express();
const df = require("dialogflow-fulfillment");

app.get("/", (req, res) => {
  res.send("We are live!");
});

app.post("/", express.json(), (req, res) => {
  // console.log(req)
  const agent = new df.WebhookClient({
    request: req,
    response: res,
  });

  let user_id = '1234567890';
  let chat_agent_id = "";
  let payload = req.body.originalDetectIntentRequest.payload;
  if (typeof payload.contact !== "undefined") {
    user_id = payload.contact.cId;
  } else if (typeof payload.From !== "undefined") {
    user_id = payload.From;
    chat_agent_id = payload.To;
    //remove whatsapp: from user_id
    user_id = user_id.substring(9, user_id.length);
  }
  console.log(agent.context)
  let actionMap = new Map();
  actionMap.set("menu", menu.send_res);
  // actionMap.set("yesno", yesno.send_res);
  // actionMap.set("menu", function (agent) {
  //   menu.send_res(agent, user_id);
  // });
  // actionMap.set("menu_option", function (agent) {
  //   menu_option.menu_option_handler(agent, user_id);
  // });
  // actionMap.set("menu_option", menu_option.menu_option_handler);

  // actionMap.set("menu_option_test", function (agent) {
  //   menu_option_test.send_res(agent, user_id);
  // });
  // actionMap.set("menu_option_report", function (agent) {
  //   menu_option_report.send_res(agent, user_id);
  // });
  // actionMap.set("pincode", pincode.send_res);
  actionMap.set("firstname", firstname.send_res);
  actionMap.set("lastname", lastname.send_res);
  // actionMap.set(
  //   "MEDTEST0005lastname.MEDTEST0005lastname-fallback",
  //   address.send_res
  // );
  // actionMap.set("address", address.send_res);
  actionMap.set("location", location_intent.send_res);
  actionMap.set("date", date.send_res);
  actionMap.set("timeofday", time_of_day.send_res);
  actionMap.set("timing_slot", timing_slot.send_res);
  actionMap.set("aadhar_front", aadhar_front.send_res);
  actionMap.set("aadhar_back", aadhar_back.send_res);
  // actionMap.set("prescription_img", prescription_img.send_res);
  // actionMap.set("test_report", test_report.send_res);
  // actionMap.set("gender", gender.send_res);
  // actionMap.set("age", age.send_res);
  function matchAction(agent) {
    let action = agent.action;
    actionMap.get(action)(agent);
  }

  agent.handleRequest(matchAction);
});

let port = 4040;

if (process.env.PORT) {
  port = process.env.PORT;
}

// Start the server at port 3333
// or port dynamically allocated by heroku
app.listen(process.env.PORT || 3334, () =>
  console.log("Server is live at port", port)
);
//https://dialogflow-twilio-r2n5zxq3ta-el.a.run.app
//forward-msg-3269.twil.io
