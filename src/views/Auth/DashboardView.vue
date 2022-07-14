<script setup lang="ts">
import telstatPublisherApi from "../../../services/telstatApi/telstatPublisherApi";
import PublisherList from "../../components/Publisher/PublisherList.vue";
import { usePublisherStore } from "@/stores/publishers";

const publisherStore = usePublisherStore();

telstatPublisherApi
  .list()
  .then((response) => publisherStore.setPublishers(response.data));
</script>

<template>
  <main>
    <h1>Dashboard</h1>
    <button>+ Publisher</button>
    <PublisherList :publishers="publisherStore.getPublishers" />
  </main>
</template>
