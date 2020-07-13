const initialState = {
    apiData:null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "update":
        return UpdateState(state,action);
        // return Object.assign({}, state, { token: action.payload });
    default:
      return state;
  }
};

function UpdateState(state,{data}){
    // console.log(data,"====== reducer data =====");
    return {...state,...data};
}