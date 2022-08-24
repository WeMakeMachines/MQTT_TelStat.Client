<script setup lang="ts">
import type { PropType } from "vue";
import type { Topic } from "@/../services/telstatApi/models";
import { useTopicStore } from "@/stores/topics";

const topicStore = useTopicStore();

const props = defineProps({
  disabled: Boolean,
  publisherId: String,
  selectedTopic: {
    type: Object as PropType<Topic>,
    required: false,
  },
  handleChangeTopic: Function as PropType<
    (event: Event, publisherId: string) => void
  >,
});
</script>

<template>
  <select
    name=""
    id="topicDropDownList_"
    :value="!selectedTopic ? 'not-assigned' : selectedTopic._id"
    :disabled="disabled"
    @change="handleChangeTopic($event, publisherId)"
  >
    <template v-for="topic in topicStore.getTopics" :key="topic._id">
      <option :value="topic._id">
        {{ topic.name }}
      </option>
    </template>
    <option value="not-assigned">Not assigned</option>
  </select>
</template>
