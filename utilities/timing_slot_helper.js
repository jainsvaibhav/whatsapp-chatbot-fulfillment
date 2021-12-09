module.exports = {
  get_slot_timings_morning(slot_id) {
    let timing_obj = {};

    switch (slot_id) {
      case 1:
        timing_obj.start = "10:00AM";
        timing_obj.end = "10:30AM";
        break;

      case 2:
        timing_obj.start = "10:30AM";
        timing_obj.end = "11:00AM";
        break;

      case 3:
        timing_obj.start = "11:00AM";
        timing_obj.end = "11:30AM";
        break;

      case 4:
        timing_obj.start = "11:30AM";
        timing_obj.end = "12:00PM";
        break;

      case 5:
        timing_obj.start = "12:00PM";
        timing_obj.end = "12:30PM";
        break;

      case 6:
        timing_obj.start = "12:30PM";
        timing_obj.end = "1:00PM";
        break;

      default:
        timing_obj.start = "10:00AM";
        timing_obj.end = "10:30AM";
    }
    return timing_obj;
  },

  get_slot_timings_evening(slot_id) {
    let timing_obj = {};

    switch (slot_id) {
      case 1:
        timing_obj.start = "04:00PM";
        timing_obj.end = "04:30PM";
        break;

      case 2:
        timing_obj.start = "04:30PM";
        timing_obj.end = "05:00PM";
        break;

      case 3:
        timing_obj.start = "05:00PM";
        timing_obj.end = "05:30PM";
        break;

      case 4:
        timing_obj.start = "05:30PM";
        timing_obj.end = "06:00PM";
        break;

      case 5:
        timing_obj.start = "06:00PM";
        timing_obj.end = "06:30PM";
        break;

      case 6:
        timing_obj.start = "06:30PM";
        timing_obj.end = "07:00PM";
        break;

      default:
        timing_obj.start = "04:00PM";
        timing_obj.end = "04:30PM";
    }
    return timing_obj;
  },

  get_slot_timings(slot_id) {
    let timing_obj = {};

    switch (slot_id) {
      case 1:
        timing_obj.start = "09:00 AM";
        timing_obj.end = "01:00 PM";
        break;

      case 2:
        timing_obj.start = "01:00 PM";
        timing_obj.end = "04:00 PM";
        break;

      case 3:
        timing_obj.start = "04:00 PM";
        timing_obj.end = "07:00 PM";
        break;

      // case 4:
      //   timing_obj.start = "11:30AM";
      //   timing_obj.end = "12:00PM";
      //   break;

      // case 5:
      //   timing_obj.start = "12:00PM";
      //   timing_obj.end = "12:30PM";
      //   break;

      // case 6:
      //   timing_obj.start = "12:30PM";
      //   timing_obj.end = "1:00PM";
      //   break;

      default:
        timing_obj.start = "10:00 AM";
        timing_obj.end = "01:00 PM";
    }
    return timing_obj;
  },
};
