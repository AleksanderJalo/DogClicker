const getPowerUpInfo = (id) => {
  switch (id) {
    case 0:
      return { name: "Double Click", description: "Your Clicks are doubled!" };
    case 1:
      return {
        name: "Double Golden Dog",
        description: "Your Golden Dogs make twice as much!",
      };
    case 2:
      return {
        name: "Double Doberman",
        description: "Your Dobermans make twice as much!",
      };
    case 3:
      return {
        name: "Double Brown Dogs",
        description: "Your Brown Dogs make twice as much!",
      };
      case 4:
        return {
          name: "Double Cat",
          description: "Your Cats make twice as much!",
      };
      case 5:
        return {
          name: "Double Bird",
          description: "Your Birds make twice as much!",
        };
  }
};
export default getPowerUpInfo;
