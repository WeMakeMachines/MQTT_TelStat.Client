import { defineStore } from "pinia";
import type { Publisher } from "../../services/telstatApi/models";

const initialState: { publishers: Publisher[] } = {
  publishers: [],
};

export const usePublisherStore = defineStore({
  id: "publisher",
  state: () => initialState,
  getters: {
    getPublishers: (state) => state.publishers,
  },
  actions: {
    setPublishers(publishers: Publisher[]) {
      this.publishers = publishers;
    },
  },
});
