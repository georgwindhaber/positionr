<template>
  <div
    v-if="position"
    class="position rounded shadow-md focus:shadow focus:outline-none p-3 bg-white"
  >
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">{{ position.title }}</h1>
      <div class="flex flex-col ml-3">
        <router-link tag="button" :to="'/position/edit/' + position._id">
          Bearbeiten
        </router-link>
        <button @click="deletePosition()">Löschen</button>
      </div>
    </div>
    <h2 class="text-xl text-gray-400">{{ position.excerpt }}</h2>
    <p>{{ position.description }}</p>
    <div class="flex justify-between mt-3">
      <pr-button @click="vote('yes')">Ja!</pr-button>
      <pr-button @click="vote('no')">Nein!</pr-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PrButton from "../../components/PrButton.vue";
export default {
  components: {
    PrButton,
  },
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
        this.position = response.data;
      });
  },
  methods: {
    goBack() {
      this.$root.site = "list";
    },
    deletePosition() {
      axios
        .delete("http://localhost:3001/positions/" + this.positionId)
        .then(() => {
          this.$router.go(-1);
        });
    },
    vote(vote) {
      axios("http://localhost:3001/votes", {
        method: "PUT",
        data: {
          positionId: this.$route.params.id,
          vote,
        },
      }).then((response) => {
        axios(
          "http://localhost:3001/positions/" + this.$route.params.id + "/votes",
          {
            method: "GET",
          }
        ).then((response) => {
          console.log(response.data);
        });
      });
    },
  },
};
</script>

<style></style>
