let initialState = {
  currentUser: {},
  Authenticated: undefined,
};

export default function user(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  const { type, payload } = action;
  switch (type) {
    case "register":
      console.log("State", stateCopy);
      return stateCopy;

    case "login":
      stateCopy.currentUser = payload;
      stateCopy.Authenticated = true;

      return stateCopy;

    case "logout":
      stateCopy.Authenticated = false;
      stateCopy.currentUser = {};
      console.log("State", stateCopy);
      return stateCopy;

    //not required
    case "company-register":
      stateCopy.currentUser.address = payload;
      console.log("State", stateCopy);
      return stateCopy;
    //not required
    case "productregister":
      console.log("Payload", payload);
      stateCopy.currentUser.product = payload;
      console.log("State", stateCopy);
      return stateCopy;

    default:
      return stateCopy;
  }
}
