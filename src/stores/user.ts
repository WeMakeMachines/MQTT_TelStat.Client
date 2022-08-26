import { defineStore } from "pinia";
import LocalStorage from "../../services/LocalStorage";

const initialState = {
  loggedIn: false,
  id: "",
  userName: "",
  firstName: "",
  lastName: "",
};

export const useUserStore = defineStore({
  id: "user",
  state: () => initialState,
  getters: {
    getLoggedInStatus: (state) => state.loggedIn,
    getId: (state) => state.id,
    getUserName: (state) => state.loggedIn,
    getFirstName: (state) => state.firstName,
    getLastName: (state) => state.lastName,
  },
  actions: {
    hydrate() {
      const userData = LocalStorage.get("user");

      if (userData) {
        this.loggedIn = true;
        this.id = userData.id;
        this.userName = userData.userName;
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
      }
    },
    login({
      id,
      userName,
      firstName,
      lastName,
    }: Omit<typeof initialState, "loggedIn">) {
      this.loggedIn = true;
      this.id = id;
      this.userName = userName;
      this.firstName = firstName;
      this.lastName = lastName;

      LocalStorage.store("user", {
        id,
        userName,
        firstName,
        lastName,
      });
    },
  },
});
