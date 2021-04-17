<template>
  <div class="container mx-auto h-full bg-gray-50">
    <div class="positions flex-col p-3">
      <button
        v-for="(position, index) of positions"
        :key="index"
        class="w-full rounded shadow-md focus:shadow focus:outline-none mt-3 p-3 bg-white"
      >
        <h2 class="text-xl font-bold">{{ position.title }}</h2>
        <p>{{ position.excerpt }}</p>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      positions: [
        { title: "Radwege", excerpt: "Lorem ipsum dolor sit amet, consectuor" },
        {
          title: "Bedingungsloses Grundeinkommen",
          excerpt: "Jeder soll leben können und das fair",
        },
      ],
    };
  },
  components: {
    HelloWorld,
  },
});
</script>

<style></style>
