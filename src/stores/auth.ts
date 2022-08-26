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

export const useAuthStore = defineStore({
  id: "auth",
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
      const authData = LocalStorage.get("auth");

      if (authData) {
        this.loggedIn = true;
        this.id = authData.id;
        this.userName = authData.userName;
        this.firstName = authData.firstName;
        this.lastName = authData.lastName;
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

        LocalStorage.store("auth", {
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
