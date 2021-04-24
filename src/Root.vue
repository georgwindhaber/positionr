<template>
  <h1>Unwanted header!</h1>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Root",
});
</script>

<style></style>
