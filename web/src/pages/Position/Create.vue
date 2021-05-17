<template>
  <div class="rounded shadow-md m-3 p-3 bg-white">
    <h1>Neue Position</h1>

    <div class="w-100 pb-3">
      <label>Titel</label>
      <input
        type="text"
        v-model="pTitle"
        class="rounded border border-gray-200 focus:border-gray-300 outline-none"
      />
    </div>

    <div class="w-100 pb-3">
      <label>Vorschautext</label>
      <input
        type="text"
        v-model="pExcerpt"
        class="rounded border border-gray-200 focus:border-gray-300 outline-none"
      />
    </div>

    <div class="w-100 pb-3">
      <label>Beschreibung</label>
      <input
        type="text"
        v-model="pDescription"
        class="rounded border border-gray-200 focus:border-gray-300 outline-none"
      />
    </div>

    <button
      type="submit"
      @click="submitPosition"
      class="rounded px-5 py-2 bg-white hover:bg-gray-100 shadow focus:shadow-sm"
    >
      Speichern
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pTitle: "",
      pDescription: "",
      pExcerpt: "",
    };
  },
  methods: {
    checkAndSave() {
      this.$router.push("/");
    },
    submitPosition() {
      axios("http://localhost:3001/position", {
        method: "PUT",
        data: {
          title: this.pTitle,
          description: this.pDescription,
        },
      }).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>

<style></style>
