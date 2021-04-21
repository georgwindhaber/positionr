<template>
  <div class="container mx-auto h-full bg-gray-50">
    <div v-if="site == 'list'" class="positions flex-col p-3">
      <button
        v-for="(position, index) of positions"
        :key="index"
        @click="openPosition(position)"
        class="w-full rounded shadow-md focus:shadow focus:outline-none mt-3 p-3 bg-white"
      >
        <h2 class="text-xl font-bold">{{ position.title }}</h2>
        <p>{{ position.excerpt }}</p>
      </button>
    </div>
    <position v-if="site == 'position'" :position="activePosition" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Position from "./pages/Position/Position.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      site: "list",
      positions: [
        { title: "Radwege", excerpt: "Lorem ipsum dolor sit amet, consectuor" },
        {
          title: "Bedingungsloses Grundeinkommen",
          excerpt: "Jeder soll leben können und das fair",
        },
      ],
      activePosition: null,
    };
  },
  methods: {
    openPosition(position) {
      this.activePosition = position
      this.site = "position"
    }
  },
  components: { Position },
});
</script>

<style></style>
