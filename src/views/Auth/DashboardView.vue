<script setup lang="ts">
import { ref } from "vue";
import AddTopicModal from "@/components/Modals/AddTopicModal.vue";
import AddPublisherModal from "@/components/Modals/AddPublisherModal.vue";
import TopicList from "@/components/Topic/TopicList.vue";
import PublisherList from "@/components/Publisher/PublisherList.vue";
import { usePublisherStore } from "@/stores/publishers";
import { useTopicStore } from "@/stores/topics";
import { useUserStore } from "@/stores/user";

const showAddPublisherModal = ref(false);
const showAddTopicModal = ref(false);
const publisherStore = usePublisherStore();
const topicStore = useTopicStore();
const userStore = useUserStore();

const handleAddPublisher = (event: Event) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const newPublisherName = formData.get("name") as string;

  publisherStore.addPublisher(newPublisherName);
};

const handleDeletePublisher = (publisherId: string) => {
  publisherStore.removePublisher(publisherId);
};

const handleAddTopic = (event: Event) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const newTopicName = formData.get("name") as string;

  topicStore.addTopic(newTopicName);
};

const handleDeleteTopic = (topicId: string) => {
  topicStore.removeTopic(topicId);
};

publisherStore.setPublishersFromApi();
topicStore.setTopicsFromApi();
</script>

<template>
  <main>
    <h1>Dashboard</h1>
    <PublisherList
      :publishers="publisherStore.getPublishers"
      :user-id="userStore.getId"
      :delete-publisher="handleDeletePublisher"
    />
    <button @click="showAddPublisherModal = true">+ Publisher</button>
    <TopicList
      :topics="topicStore.getTopics"
      :delete-topic="handleDeleteTopic"
    />
    <button @click="showAddTopicModal = true">+ Topic</button>
  </main>

  <Teleport to="body">
    <AddPublisherModal
      :show="showAddPublisherModal"
      :handle-submit="handleAddPublisher"
      @close="showAddPublisherModal = false"
    />

    <AddTopicModal
      :show="showAddTopicModal"
      :handle-submit="handleAddTopic"
      @close="showAddTopicModal = false"
    />
  </Teleport>
</template>
