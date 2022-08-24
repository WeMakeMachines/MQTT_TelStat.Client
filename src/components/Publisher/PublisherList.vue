<script setup lang="ts">
import TelstatPublisherApi from "@/../services/telstatApi/telstatPublisherApi";
import TopicListDropDown from "@/components/Topic/TopicListDropDown.vue";

const props = defineProps({
  publishers: { type: [] },
  userId: String,
  deletePublisher: Function,
});

const handleChangeTopic = (event: Event, publisherId: string) => {
  const element = event.target as HTMLSelectElement;
  const topicId = element.value;

  if (topicId) {
    TelstatPublisherApi.updateTopic({ publisherId, topicId });
  }
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>id</th>
        <th>topic</th>
        <th>owner</th>
        <th>last publish date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="publisher in publishers" :key="publisher._id">
        <tr>
          <td>
            <router-link
              :to="{
                name: 'publisher',
                params: { publisherId: `${publisher._id}` },
              }"
              >{{ publisher.name }}</router-link
            >
          </td>
          <td>{{ publisher.nanoId }}</td>
          <td>
            <TopicListDropDown
              :disabled="publisher.owner._id !== userId"
              :publisher-id="publisher._id"
              :selected-topic="publisher.topic"
              :handle-change-topic="handleChangeTopic"
            />
          </td>
          <td>
            {{ publisher.owner.userName }}
          </td>
          <td>
            <p v-if="publisher.lastPublishDate">
              {{ publisher.lastPublishDate }}
            </p>
            <p v-else>Not receiving data</p>
          </td>
          <td>
            <button
              :disabled="publisher.owner._id !== userId"
              @click="deletePublisher(publisher._id)"
            >
              X
            </button>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
