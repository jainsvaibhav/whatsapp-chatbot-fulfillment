// var lookup = require("india-pincode-lookup");
// const emojis = require("../utilities/emojis");

module.exports = {
  send_res(agent) {
    let message = "";

    message += module.exports.time_slots();
    // let mTimeofday = "";
    // if (agent.parameters.timeofday == 1) {
    //   message += module.exports.morning_slots();
    //   mTimeofday = "morning";
    // } else if (agent.parameters.timeofday == 2) {
    //   message += module.exports.evening_slots();
    //   mTimeofday = "evening";
    // } else {
    //   agent.context.set("timeofday", 2);
    //   message += "Please enter option 1 for morning or 2 for evening";
    //   agent.add(message);
    //   return;
    // }
    // console.log(mTimeofday, agent.parameters.timeofday);
    module.exports.set_contexts(agent, "timeofday", "timing_slot", {});

    // module.exports.set_contexts(agent, "timeofday", "timing_slot", {
    //   timeofday: mTimeofday,
    // });
    agent.add(message);
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

  morning_slots() {
    let message = "";
    message += "Please select one of the following timing slot:";

    message += "\n*1.* 10:00 AM - 10:30 AM";
    message += "\n*2.* 10:30 AM - 11:00 AM";
    message += "\n*3.* 11:00 AM - 11:30 AM";
    message += "\n*4.* 11:30 AM - 12:00 PM";
    message += "\n*5.* 12:00 PM - 12:30 PM";
    message += "\n*6.* 12:30 PM - 1:00 PM";

    message += "\n\n" + emojis.idea;
    message += "Please type a number from *1,2,3,...,6* to proceed.";
    return message;
  },

  evening_slots() {
    const emojis = require("../utilities/emojis");
    let message = "";
    message += "Please select one of the following timing slot:";

    message += "\n*1.* 4:00 PM - 04:30 PM";
    message += "\n*2.* 04:30 PM - 05:00 PM";
    message += "\n*3.* 05:00 PM - 05:30 PM";
    message += "\n*4.* 05:30 PM - 06:00 PM";
    message += "\n*5.* 06:00 PM - 06:30 PM";
    message += "\n*6.* 06:30 PM - 07:00 PM";

    message += "\n\n" + emojis.idea;
    message += "Please type a number from *1,2,3,...,6* to proceed.";
    return message;
  },

  time_slots() {
    let message = "";
    message += "Please select one of the following timing slot:";

    message += "\n*1.* 09:00 AM - 01:00 PM";
    message += "\n*2.* 01:00 PM - 04:00 PM";
    message += "\n*3.* 04:00 PM - 07:00 PM";
    // message += "\n*4.* 11:30 AM - 12:00 PM";
    // message += "\n*5.* 12:00 PM - 12:30 PM";
    // message += "\n*6.* 12:30 PM - 1:00 PM";

    message += "\n\n" + emojis.idea;
    message += "Please type a number from *1, 2, and 3* to proceed.";
    return message;
  },
};
