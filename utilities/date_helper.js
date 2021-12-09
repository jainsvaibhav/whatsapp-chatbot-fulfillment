module.exports = {
  invalid_date(date) {
    let now = new Date();
    let deadline = new Date();
    deadline.setMonth(now.getMonth() + 3);
    deadline.setHours(23);
    deadline.setMinutes(59);

    let input = new Date(date);

    // if date is today
    if (module.exports.are_dates_equal(input, now)) {
      return false;
    }
    // if date is out of range
    if (input.getTime() < now.getTime() || input.getTime() > deadline.getTime())
      return true;
    if (input < now)
      return true;
    return false;
  },

  invalid_date_msg(input_str) {
    let now = new Date();
    let deadline = new Date();
    deadline.setMonth(now.getMonth() + 3);
    let input = new Date(input_str);

    let message = "";
    message += "Sorry, the date " + module.exports.get_date(input);
    message += " is not available!";
    message += " Please type a date between today i.e. ";
    message += module.exports.get_date(now);
    message += " and 3 months from now i.e. ";
    message += module.exports.get_date(deadline) + ".";
    return message;
  },

  is_today_date_OOB(input_str) {
    let input = new Date(input_str);
    let now = new Date();
    let today_eve = new Date();
    // today_eve.setHours(16);
    today_eve.setHours(19);
    today_eve.setMinutes(0);
    today_eve.setSeconds(0);

    if (
      module.exports.are_dates_equal(input, now) &&
      today_eve.getTime() < now.getTime()
    ) {
      return true;
    }
    return false;
  },

  today_OOB_msg() {
    let now = new Date();
    let deadline = new Date();
    deadline.setMonth(now.getMonth() + 3);

    let message = "";
    // message += "Since it's past 4:00PM, you can't make any appointments today,";
    message += "Since it's past 07:00PM, you can't make any appointments today,";
    message += " Please type a date between today i.e. ";
    message += module.exports.get_date(now);
    message += " and 3 months from now i.e. ";
    message += module.exports.get_date(deadline) + ".";
    return message;
  },

  is_today_late(input_str) {
    let input = new Date(input_str);
    let now = new Date();
    let today_morning = new Date();
    // today_morning.setHours(10);
    today_morning.setHours(9);
    today_morning.setMinutes(0);
    today_morning.setSeconds(0);

    if (
      module.exports.are_dates_equal(input, now) &&
      today_morning.getTime() < now.getTime()
    ) {
      return true;
    }
    return false;
  },

  get_date(date) {
    let str = "";
    str = date.getDate() + "/";
    str += date.getMonth() + 1 + "/";
    str += date.getFullYear();
    return str;
  },

  are_dates_equal(date1, date2) {
    let date1_obj = new Date(date1);
    let date2_obj = new Date(date2);

    if (
      date1_obj.getDate() == date2_obj.getDate() &&
      date1_obj.getMonth() == date2_obj.getMonth() &&
      date1_obj.getFullYear() == date2_obj.getFullYear()
    )
      return true;
    return false;
  }
};
