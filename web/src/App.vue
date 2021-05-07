<template>
  <div class="container mx-auto h-full bg-gray-50">
    <div class="positions flex-col p-3">
      <router-link
        :to="'/position/' + position.id"
        v-for="(position, index) of positions"
        :key="index"
      >
        <div
          class="w-full rounded shadow-md focus:shadow focus:outline-none mt-3 p-3 bg-white"
        >
          <h2 class="text-xl font-bold">{{ position.title }}</h2>
          <p>{{ position.excerpt }}</p>
        </div>
      </router-link>
      <router-link tag="button" to="/position/create"> + Neu </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      positions: [
        {
          id: 1,
          title: "Radwege",
          excerpt: "Lorem ipsum dolor sit amet, consectuor",
        },
        {
          id: 2,
          title: "Bedingungsloses Grundeinkommen",
          excerpt: "Jeder soll leben können und das fair",
        },
      ],
    };
  },
  methods: {},
});
</script>

<style></style>
