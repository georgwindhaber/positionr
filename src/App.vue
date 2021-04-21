<template>
  <div class="container mx-auto h-full bg-gray-50">
    <div class="positions flex-col p-3">
      <button
        v-for="(position, index) of positions"
        :key="index"
        class="w-full rounded shadow-md focus:shadow focus:outline-none mt-3 p-3 bg-white"
      >
        <router-link :to="'/position/' + position.id">
          <h2 class="text-xl font-bold">{{ position.title }}</h2>
        </router-link>
        <p>{{ position.excerpt }}</p>
      </button>
    </div>
    <router-link to="/">Go to Home</router-link>
    <router-view></router-view>
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
