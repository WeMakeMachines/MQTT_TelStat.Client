<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

authStore.hydrate();

authStore.$onAction(({ name, after }) => {
  after(() => {
    switch (name) {
      case "logout":
        router.push("/login");
        break;
      case "login":
        router.push("/auth");
        break;
    }
  });
});
</script>

<template>
  <header>
    <img
      alt="Telstat logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <RouterView />
</template>
