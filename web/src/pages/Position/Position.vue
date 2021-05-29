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
      <pr-button @click="vote('yes')">Ja! ({{ yes }})</pr-button>
      <pr-button @click="vote('no')">Nein! ({{ no }})</pr-button>
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
      votes: null,
    };
  },
  computed: {
    positionId() {
      return this.$route.params.id;
    },
    yes() {
      if (!this.votes) {
        return "...";
      }

      const yes = this.votes.find((voteType) => {
        return voteType._id == "yes";
      });

      if (yes) {
        return yes.count;
      } else {
        return 0;
      }
    },
    no() {
      if (!this.votes) {
        return "...";
      }
      const no = this.votes.find((voteType) => {
        return voteType._id == "no";
      });

      if (no) {
        return no.count;
      } else {
        return 0;
      }
    },
  },
  created() {
    axios
      .get("http://localhost:3001/positions/" + this.positionId)
      .then((response) => {
        this.position = response.data;
      });

    this.getVotes();
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
        this.getVotes();
      });
    },
    getVotes() {
      axios(
        "http://localhost:3001/positions/" + this.$route.params.id + "/votes",
        {
          method: "GET",
        }
      ).then((response) => {
        if (response.statusText == "OK" && response.data.length != 0) {
          this.votes = response.data;
        } else {
          this.votes = null;
        }
      });
    },
  },
};
</script>

<style></style>
