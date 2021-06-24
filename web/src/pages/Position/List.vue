<template>
  <div class="container mx-auto px-3">
    <div class="positions flex-col">
      <router-link
        :to="'/position/' + position._id"
        v-for="(position, index) of positions"
        :key="index"
      >
        <button
          class="w-full rounded shadow-md focus:shadow focus:outline-none mb-3 p-3 bg-white"
        >
          <h2 class="text-xl font-bold">{{ position.title }}</h2>
          <p>{{ position.excerpt }}</p>
        </button>
      </router-link>
      <router-link tag="button" to="/position/create"> + Neu </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import connector from "../../modules/connector/connector"

export default defineComponent({
  name: "App",
  data() {
    return {
      positions: [],
    };
  },
  created() {
    connector.get("/positions").then((response) => {
      this.positions = response.data;
    });
  },
  methods: {},
});
</script>

<style></style>
