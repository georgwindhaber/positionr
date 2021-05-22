<template>
  <div
    v-if="position"
    class="position rounded shadow-md focus:shadow focus:outline-none p-3 bg-white"
  >
    <h1 class="text-3xl font-bold">{{ position.title }}</h1>
    <h2 class="text-xl text-gray-400">{{ position.excerpt}}</h2>
    <p>{{ position.description }}</p>
    <button @click="voteYes()">Ja!</button>
    <button @click="voteNo()">Nein!</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      position: null,
    };
  },
  computed: {
    positionId() {
      return this.$route.params.id;
    },
  },
  created() {
    axios
      .get("http://localhost:3001/positions/" + this.positionId)
      .then((response) => {
        console.log(response)
        this.position = response.data;
      });
  },
  methods: {
    goBack() {
      this.$root.site = "list";
    },
  },
};
</script>

<style></style>
