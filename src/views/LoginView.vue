<script setup lang="ts">
import telstatAuthApi from "@/../services/telstatApi/telstatAuthApi";
import type { LoginCredentials } from "@/../services/telstatApi/telstatAuthApi";
import { useUserStore } from "@/stores/user";
import router from "@/router";

const userStore = useUserStore();

const handleSubmit = (event: Event) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const data: LoginCredentials = {
    userName: formData.get("userName") as string,
    password: formData.get("password") as string,
  };

  telstatAuthApi
    .login(data)
    .then((response) => {
      const { _id: id, userName, firstName, lastName } = response.data;

      userStore.login({
        id,
        userName,
        firstName,
        lastName,
      });
      router.push("/auth");
    })
    .catch((error) => {
      console.log(error);
    });
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
