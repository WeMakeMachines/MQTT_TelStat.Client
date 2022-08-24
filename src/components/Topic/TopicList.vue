<script setup lang="ts">
const props = defineProps({
  topics: { type: [] },
  deleteTopic: Function,
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Publisher count</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="topic in topics" :key="topic._id">
        <tr>
          <td>
            {{ topic.name }}
          </td>
          <td>
            <p v-if="topic.totalPublishers">
              {{ topic.totalPublishers }}
            </p>
            <p v-else>0</p>
          </td>
          <td><button @click="deleteTopic(topic._id)">X</button></td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
