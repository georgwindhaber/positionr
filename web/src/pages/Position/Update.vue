<template>
  <div class="rounded shadow-md m-3 p-3 bg-white">
    <h1>Update {{ pTitle }}</h1>

    <div class="w-100 pb-3">
      <label>Titel</label>
      <input
        type="text"
        v-model="pTitle"
        class="
          rounded
          border border-gray-200
          focus:border-gray-300
          outline-none
        "
      />
    </div>

    <div class="w-100 pb-3">
      <label>Vorschautext</label>
      <input
        type="text"
        v-model="pExcerpt"
        class="
          rounded
          border border-gray-200
          focus:border-gray-300
          outline-none
        "
      />
    </div>

    <div class="w-100 pb-3">
      <label>Beschreibung</label>
      <input
        type="text"
        v-model="pDescription"
        class="
          rounded
          border border-gray-200
          focus:border-gray-300
          outline-none
        "
      />
    </div>

    <button
      type="submit"
      @click="updatePosition"
      class="
        rounded
        px-5
        py-2
        bg-white
        hover:bg-gray-100
        shadow
        focus:shadow-sm
      "
    >
      Updaten
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
  created() {
    axios
      .get("http://localhost:3001/positions/" + this.$route.params.id)
      .then((response) => {
        this.pTitle = response.data.title;
        this.pDescription = response.data.description;
        this.pExcerpt = response.data.excerpt;
      });
  },
  methods: {
    updatePosition() {
      axios("http://localhost:3001/positions/" + this.$route.params.id, {
        method: "PUT",
        data: {
          title: this.pTitle,
          excerpt: this.pExcerpt,
          description: this.pDescription,
        },
      }).then((response) => {
        this.$router.replace("/position/" + this.$route.params.id);
      });
    },
  },
};
</script>

<style></style>
