<script setup lang="ts">
import type { LoginCredentials } from "@/../services/telstatApi/telstatAuthApi";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const handleSubmit = (event: Event) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const data: LoginCredentials = {
    userName: formData.get("userName") as string,
    password: formData.get("password") as string,
  };

  authStore.login(data);
};
</script>

<template>
  <main>
    <form @submit="handleSubmit">
      <label>
        Username
        <input name="userName" type="text" required />
      </label>
      <label>
        Password
        <input name="password" type="password" required />
      </label>
      <button>Login</button>
    </form>
  </main>
</template>
