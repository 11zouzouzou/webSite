import * as types from "../types";

const initPageState = () => {
  return {
    userInfo: {
      _id: "",
      name: "",
      avatar: ""
    }
  };
};
const user = {
  state: initPageState(),
  mutations: {
    //TODO check
    [types.SAVE_USER](state: object | any, pageState: object | any) {
      for (const prop in pageState) {
        state[prop] = pageState[prop];
      }
    }
  },
  actions: {}
};

export default user;