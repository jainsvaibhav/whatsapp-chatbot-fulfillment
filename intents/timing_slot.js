let helper = require("../utilities/timing_slot_helper");

module.exports = {
  send_res(agent) {
    // let timeofday = agent.context.inputContexts.timing_slot.parameters.timeofday,
    test_type = agent.context.inputContexts.timing_slot.parameters.test_type,
    mobile = agent.context.inputContexts.timing_slot.parameters.mobile;
    if (agent.parameters.slot_id < 0 || agent.parameters.slot_id > 3) {
      agent.context.set("timing_slot", 2);
      agent.add("Please make a choice from 1,2 and 3");
      return;
    }
    // if (agent.parameters.slot_id < 0 || agent.parameters.slot_id > 6) {
    //   agent.context.set("timing_slot", 2);
    //   agent.add("Please make a choice in the range 1,2,..,6");
    //   return;
    // }

    // if (timeofday == "morning")
    //   timing_obj = helper.get_slot_timings_morning(agent.parameters.slot_id);
    // else if (timeofday == "evening")
    //   timing_obj = helper.get_slot_timings_evening(agent.parameters.slot_id);
    timing_obj = helper.get_slot_timings(agent.parameters.slot_id);
    let message = "";
    let new_context = "unknown";

    
    new_context = "aadhar_front";
    message += "Please send your PhotoId card image (front).";

    module.exports.set_contexts(agent, "timing_slot", new_context, timing_obj);

    agent.add(message);
  },

  set_contexts(agent, old_context, new_context, param) {
    let i = agent.contexts.findIndex((x) => x.name == old_context);
    agent.context.set(
      new_context,
      5,
      Object.assign({}, agent.contexts[i].parameters, param)
    );
    agent.context.delete(old_context);
  },
};
