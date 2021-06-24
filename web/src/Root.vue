<template>
  <div class="body h-full w-full bg-gray-100 pt-3">
    <header
      v-if="$route.path != '/login'"
      class="bg-white shadow-md rounded p-2 mx-3 mb-3 border"
    >
      <h1 class="text-red-600 text-2xl">Position R</h1>
      <div class="menu-bar flex justify-between">
        <router-link tag="button" to="/">Liste</router-link>
        <router-link tag="button" to="/login" @click="logout()"
          >Logout</router-link
        >
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Root",
  methods: {
    logout() {
      localStorage.removeItem("jwt");
    },
  },
});
</script>

<style></style>
