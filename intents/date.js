const helper = require("../utilities/date_helper");


module.exports = {
  send_res(agent) {
    let message = "";
    message += module.exports.time_slots();
    // message += "Which timing slot do you want?";
    // message += "\n*1.* Morning";
    // message += "\n*2.* Evening";
    // message += "\n\nPlease type *1 or 2* to proceed";
    test_date = agent.parameters.test_date;
    updated_date = new Date(test_date);
    updated_test_date = String(updated_date.getDate())+ "/" + String(updated_date.getMonth() + 1)+ "/" +String(updated_date.getYear()-100+2000) 
    // console.log(typeof(test_date));
    // console.log("test_date", test_date)
    // updated_test_date = test_date.split("/")[1] + "/" + test_date.split("/")[0] + "/" + test_date.split("/")[2]
    // console.log("updated_test_date", updated_test_date)
    mobile = agent.context.inputContexts.date.parameters.mobile;
    if (helper.invalid_date(updated_test_date)) {
      agent.context.set("date", 2);
      agent.add(helper.invalid_date_msg(updated_test_date));
      return;
    }
    if (helper.is_today_date_OOB(updated_test_date)) {
      agent.context.set("date", 2);
      agent.add(helper.today_OOB_msg());
      return;
    }

    // if (helper.is_today_late(test_date)) {
    //   module.exports.set_contexts(agent, "date", "timing_slot", {
    //     date: test_date,
    //     timeofday: "evening",
    //   });
    //   agent.add(evening_slots());
    //   return;
    // }

    module.exports.set_contexts(agent, "date", "timing_slot", {
      date: updated_test_date,
    });
    // module.exports.set_contexts(agent, "date", "timeofday", {
    //   date: updated_test_date,
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
  time_slots() {
    let message = "";
    message += "Please select one of the following timing slot:";

    message += "\n*1.* 09:00 AM - 01:00 PM";
    message += "\n*2.* 01:00 PM - 04:00 PM";
    message += "\n*3.* 04:00 PM - 07:00 PM";
    // message += "\n*4.* 11:30 AM - 12:00 PM";
    // message += "\n*5.* 12:00 PM - 12:30 PM";
    // message += "\n*6.* 12:30 PM - 1:00 PM";

    // message += "\n\n" + emojis.idea;
    message += "\nPlease type a number from *1, 2, and 3* to proceed.";
    return message;
  },
};
