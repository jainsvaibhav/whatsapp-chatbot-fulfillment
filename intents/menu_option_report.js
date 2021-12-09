const menu_test_reports = require("./menu_test_reports");

module.exports = {
  send_res(agent) {
    let message = "";
    message += menu_test_reports.send_msg(agent);
    agent.add(message);
  },
};
