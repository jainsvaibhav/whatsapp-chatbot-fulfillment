module.exports = {
  send_res(agent) {
    let message = "";
    message += "Please share your location via WhatsApp Location Feature.";
    // message += "\nPlease type a preferred date (DD/MM/YYYY) for the test,";
    // message += " you can book any day from the next 3 months.";
    mobile = agent.context.inputContexts.lastname.parameters.mobile
    console.log("lastname", agent.parameters.lastname, "mobile", mobile)
    //message += "(Please do include your city or state)";
    module.exports.set_contexts(agent, "lastname", "location", {
      lastname: agent.parameters.lastname,
    });
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
};
