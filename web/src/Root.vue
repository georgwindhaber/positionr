<template>
  <div class="body h-full w-full bg-gray-100 p-3">
    <header class="bg-white shadow-md rounded p-2 mb-3 border">
      <h1 class="text-red-600 text-2xl">Position R</h1>
      <router-link tag="button" to="/"> Liste </router-link>
    </header>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Root",
});
</script>

<style></style>
