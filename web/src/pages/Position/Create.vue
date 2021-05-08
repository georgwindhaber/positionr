<template>
  <div class="p-3 bg-gray-50">
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
      <label>Beschreibung</label>
      <input
        type="text"
        v-model="pDescription"
        class="rounded border border-gray-200 focus:border-gray-300 outline-none"
      />
    </div>

    <button
      type="submit"
      @click="checkAndSave"
      class="rounded px-5 py-2 bg-white hover:bg-gray-100 shadow focus:shadow-sm"
    >
      Speichern
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pTitle: "",
      pDescription: "",
    };
  },
  methods: {
    checkAndSave() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
