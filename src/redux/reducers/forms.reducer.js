const formsReducer = (state = {
  data: {
    paintForm:[],
    decorForm: [],
    appForm: [],
    miscForm: []
  }
}, action) => {
    switch (action.type) {
      case 'SET_FORM_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default formsReducer;