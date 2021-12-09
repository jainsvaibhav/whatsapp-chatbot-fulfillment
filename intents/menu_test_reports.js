let api = require("../utilities/test_report_api");
let emojis = require("../utilities/emojis");

module.exports = {
  send_msg(agent) {
    let message =
      "Here is a list of the tests that you have taken in the past:\n";

    message += api.get_test_reports_message();
    message += module.exports.tip_message(api.get_test_reports_size());
    for (let context of agent.contexts) {
      agent.context.delete(context.name);
    }
    agent.context.set("test_report", 2);
    return message;
  },

  tip_message(n) {
    let message = "\n\n" + emojis.idea;
    message += "*Tip :* Please type a no. in the range 1,2,..," + n;
    return message;
  },
};
