import { defineStore } from "pinia";

import LocalStorage from "@/../services/LocalStorage";
import telstatAuthApi from "@/../services/telstatApi/telstatAuthApi";
import type { LoginCredentials } from "@/../services/telstatApi/telstatAuthApi";
import router from "@/router";

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
    async login(loginCredentials: LoginCredentials) {
      try {
        const response = await telstatAuthApi.login({
          userName: loginCredentials.userName,
          password: loginCredentials.password,
        });

        const { _id: id, userName, firstName, lastName } = response.data;

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

        router.push("/auth");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
