import { defineStore } from "pinia";
import type { Topic } from "@/../services/telstatApi/models";
import telstatTopicApi from "@/../services/telstatApi/telstatTopicApi";

const initialState: { topics: Topic[] } = {
  topics: [],
};

export const useTopicStore = defineStore({
  id: "topic",
  state: () => initialState,
  getters: {
    getTopics: (state) => state.topics,
  },
  actions: {
    async setTopicsFromApi() {
      try {
        const response = await telstatTopicApi.list();

        this.topics = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addTopic(topicName: string) {
      try {
        const response = await telstatTopicApi.create(topicName);

        this.topics.push(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async removeTopic(topicId: string) {
      try {
        await telstatTopicApi.delete(topicId);

        const topicIndex = this.topics.findIndex(
          (topic) => topic._id === topicId
        );

        this.topics.splice(topicIndex, 1);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
