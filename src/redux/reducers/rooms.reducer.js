const roomsList = (state = [], action) => {
    switch (action.type) {
      case 'SET_ROOM_LIST':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default roomsList;