<template>
  <div class="body h-full w-full bg-gray-100">
    <h1 class="text-red-600 text-2xl">Position R</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Root",
});
</script>

<style>

</style>
