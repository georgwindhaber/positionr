<template>
  <div class="body">
    <h1>Unwanted header!</h1>
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
