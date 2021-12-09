module.exports = {
  send_res(agent) {
    console.log('menu-context', agent.context)
    mobile = agent.context.inputContexts.welcomecontext.parameters.mobile
    // let mobile = 1234567890;
    module.exports.set_contexts(agent, "welcomecontext", "firstname", {
      mobile: mobile,
    });
    console.log('menu-context-after-renaming', agent.context)
    let message = "";
    message += module.exports.menu_message();
    console.log("mobile", mobile)
    agent.add(message);
  },

  menu_message() {
    let message = 
      "Hi there,\nThis is Alex, your virtual Healthcare and Appointment Assistant at *Forward HealtTech System*!"
    // message +=
    //   "\nPlease take the below checkup test for COVID-19";
    message += "\n\nPlease type your *First Name* to start booking your Appointment.";
    return message;
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
};
