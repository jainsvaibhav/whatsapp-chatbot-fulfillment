module.exports = {
  send_res(agent) {
    let message = "";
    message += "Please get your test report at this link below:\n";
    message += "http://link-to-pdf-report";
    for (let context of agent.contexts) {
      agent.context.delete(context.name);
    }
    agent.add(message);
  },
};
