module.exports = {
  send_res(agent) {
    let message = "";
    let latitude = agent.context.inputContexts.location.parameters.latitude,
      longitude = agent.context.inputContexts.location.parameters.longitude;
    let address = agent.context.inputContexts.location.parameters.address;
    let location_name = agent.context.inputContexts.location.parameters.location_name;
    mobile = agent.context.inputContexts.location.parameters.mobile;
    
    console.log("latitude", agent.context.inputContexts.location.parameters.latitude , "mobile", mobile, "longitude", agent.context.inputContexts.location.parameters.longitude)
    console.log(agent.contexts);
    module.exports.set_contexts(agent, "location", "date", {
      latitude: latitude,
      longitude: longitude,
      address: address,
      location_name: location_name
    });
    console.log(agent.contexts);
    message += "Perfect!!! We have received your location.\nLocation :- https://www.google.com/maps/place/"+latitude+","+longitude
    message += "\n\nAddress - " + location_name + " " + address;
    message += "\nPlease type a preferred date (DD/MM/YYYY) for the test.";
    message += "\nTip - You can book any day from the next 3 months.";
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
