<template>
  <div class="p-3">
    <div
      v-if="position"
      class="position w-full rounded shadow-md focus:shadow focus:outline-none p-3 bg-white"
    >
      <h1 class="text-xl font-bold">{{ position.title }}</h1>
      <p>{{ position.text }}</p>
      <button @click="voteYes()">Ja!</button>
      <button @click="voteNo()">Nein!</button>
    </div>
    <div v-else>
      <router-link to="/">Goober</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: Object,
      default: null,
    },
  },
  methods: {
    goBack() {
      this.$root.site = "list";
    },
  },
};
</script>

<style></style>
