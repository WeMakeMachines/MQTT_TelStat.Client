<script setup lang="ts">
import Modal from "@/components/Modals/BaseModal.vue";

const props = defineProps({
  show: Boolean,
  handleSubmit: Function,
});
</script>

<template>
  <Modal :show="show">
    <template #header>
      <h3>Add Topic</h3>
    </template>
    <template #body>
      <form @submit="handleSubmit">
        <label>
          Name
          <input name="name" type="text" required />
        </label>
        <button @click="$emit('close')">Add</button>
      </form>
    </template>
  </Modal>
</template>
