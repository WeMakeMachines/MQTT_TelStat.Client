import { defineStore } from "pinia";
import type { Publisher } from "@/../services/telstatApi/models";
import telstatPublisherApi from "@/../services/telstatApi/telstatPublisherApi";

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
    async setPublishersFromApi() {
      try {
        const response = await telstatPublisherApi.list();

        this.publishers = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addPublisher(publisherName: string) {
      try {
        const response = await telstatPublisherApi.create(publisherName);

        this.publishers.push(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async removePublisher(publisherId: string) {
      try {
        await telstatPublisherApi.delete(publisherId);

        const publisherIndex = this.publishers.findIndex(
          (publisher) => publisher._id === publisherId
        );

        this.publishers.splice(publisherIndex, 1);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
