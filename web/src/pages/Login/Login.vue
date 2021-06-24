<template>
  <!-- <h1>Login</h1>
  <hr />

  <label for="username">Benutzername</label>
  <input name="username" type="email" />

  <label for="password">Passwort</label>
  <input name="password" type="password" /> -->

  <div
    class="
      min-h-screen
      flex
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Einloggen
        </h2>
      </div>
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="
              appearance-none
              rounded-none
              relative
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-t-md
              focus:outline-none
              focus:ring-red-500
              focus:border-red-500
              focus:z-10
              sm:text-sm
            "
            placeholder="Email address"
            v-model="email"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="
              appearance-none
              rounded-none
              relative
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-b-md
              focus:outline-none
              focus:ring-red-500
              focus:border-red-500
              focus:z-10
              sm:text-sm
            "
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="
            group
            relative
            w-full
            flex
            justify-center
            py-2
            px-4
            border border-transparent
            text-sm
            font-medium
            rounded-md
            text-white
            bg-red-600
            hover:bg-red-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-red-500
          "
          @click="login()"
        >
          Sign in
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import connector from "../../modules/connector/connector";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      connector
        .post("/login", { email: this.email, password: this.password })
        .then((response) => {
          if (response.statusText == "OK") {
            localStorage.jwt = response.data;
            this.$router.push("/");
          }
        });
    },
  },
};
</script>

<style></style>
