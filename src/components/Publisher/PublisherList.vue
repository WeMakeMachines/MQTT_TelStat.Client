<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  publishers: { type: [] },
});

const showPublishDate = (date: null | number): string => {
  if (!date) return "Not receiving data!";

  return new Date(date).toLocaleDateString();
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>id</th>
        <th>owner</th>
        <th>last publish date</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in publishers" :key="item._id">
        <tr>
          <td>
            <router-link
              :to="{
                name: 'publisher',
                params: { publisherId: `${item._id}` },
              }"
              >{{ item.name }}</router-link
            >
          </td>
          <td>{{ item._id.slice(0, 3) }}...</td>
          <td>
            {{ item.owner.userName }}
          </td>
          <td>
            {{ showPublishDate(item.lastPublishDate) }}
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
