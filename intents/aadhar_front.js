module.exports = {
  send_res(agent) {
    let message = "";
    message += "Your Photo Id front image is received successfully! ";
    message += "Please also send your PhotoId image (backside)";
    adharFrontImagePath = agent.context.inputContexts.aadhar_front.parameters.adharFrontImagePath,
    mobile = agent.context.inputContexts.aadhar_front.parameters.mobile;
    // agent.context.set("aadhar_back", 2);
    module.exports.set_contexts(agent, "aadhar_front", "aadhar_back", {
      adharFrontImagePath: adharFrontImagePath
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
