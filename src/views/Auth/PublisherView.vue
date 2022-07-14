<script setup lang="ts">
import telstatPublisherApi from "../../../services/telstatApi/telstatPublisherApi";
import type { Publisher } from "../../../services/telstatApi/models";

import { defineProps, reactive, toRefs } from "vue";

const props = defineProps<{
  publisherId: string;
}>();

const { publisherId } = toRefs(props);

const state: { publisher: Publisher } = reactive({
  publisher: {
    _id: "",
    nanoId: "",
    owner: {
      _id: "",
      userName: "",
    },
    lastPublishDate: null,
    name: "",
    telemetry: [],
  },
});

telstatPublisherApi.getOne(publisherId.value).then((response) => {
  state.publisher = response.data;
});
</script>

<template>
  <main>
    <h1>Publisher details</h1>
    <p>{{ state.publisher._id }}</p>
    <p>{{ state.publisher.nanoId }}</p>
    <p>{{ state.publisher.owner.userName }}</p>
    <p>{{ state.publisher.lastPublishDate }}</p>
    <p>{{ state.publisher.name }}</p>
  </main>
</template>
