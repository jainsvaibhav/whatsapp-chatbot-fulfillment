const fs = require("fs");
const path = "test_reports_repo/test_reports.json";

module.exports = {
  get_test_reports_message() {
    reports = module.exports.get_all_test_reports();

    let message = "";
    let i = 1;
    for (let report of reports) {
      message += "*" + i + ".* ";
      message += report.test_type + " ";
      message += report.test_date + " ";
      message += report.test_time + "\n";
      ++i;
    }

    return message;
  },

  get_all_test_reports() {
    if (fs.existsSync(path)) {
      let data = fs.readFileSync(path);
      return JSON.parse(data);
    }
    return [];
  },

  get_test_reports_size() {
    return module.exports.get_all_test_reports().length;
  },
};
