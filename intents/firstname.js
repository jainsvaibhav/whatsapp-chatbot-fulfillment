module.exports = {
  send_res(agent) {
    let message = "";
    message = "Please enter your *Last Name*.";
    mobile = agent.context.inputContexts.firstname.parameters.mobile
    console.log("firstname mobile", mobile)
    console.log("firstname", agent.parameters.firstname)
    module.exports.set_contexts(agent, "firstname", "lastname", {
      firstname: agent.parameters.firstname,
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
