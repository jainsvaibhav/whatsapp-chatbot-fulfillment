const { save_appo } = require("../utilities/appointment_api");

module.exports = {
  send_res(agent, user_id) {
    let message = "";
    for (context of agent.contexts) {
      agent.context.delete(context.name);
    }
    switch (agent.parameters.test_type.toLowerCase()) {
      case "blood":
        message += "What is your firstname?";
        agent.context.set("firstname", 2, {
          test_type: "BLOOD",
          user_id: user_id,
        });
        save_appo({
          test_type: "blood",
          mobile: user_id,
        });
        break;

      case "covid":
        message += "What is your firstname?";
        agent.context.set("firstname", 2, {
          test_type: "COVID",
          user_id: user_id,
        });
        save_appo({
          test_type: "covid",
          mobile: user_id,
        });
        break;
    }
    agent.add(message);
  },
};
