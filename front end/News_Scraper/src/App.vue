<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div v-if="auth">
    <header class="sticky-top bg-white">
      <div class="wrapper">
        <nav>
          <ul class="nav nav-tabs justify-content-center pt-3">
            <li class="nav-item">
              <!-- <a class="nav-link active" aria-current="page" href="#">Active</a> -->
              <RouterLink
                v-on:click="Stats('WorldNewsStats')"
                :class="WorldNewsStats"
                class="nav-link fs-3"
                to="/WorldNews"
                >World News</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                v-on:click="Stats('BusinessStats')"
                :class="BusinessStats"
                class="nav-link fs-3"
                to="/Business"
                >Business</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                v-on:click="Stats('AfricaStats')"
                :class="AfricaStats"
                class="nav-link fs-3"
                to="/Africa"
                >Africa</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <button
        v-on:click="logout"
        class="btn btn-danger position-absolute"
        style="top: 15px; right: 25px"
      >
        logout
      </button>
    </header>
  </div>

  <RouterView />
  <welcomePage v-if="auth == false" />
</template>

<script>
import session from "./session";
import router from "./router";
import welcomePage from "./views/main/welcome.vue";

export default {
  data: function () {
    return {
      auth: true,
      WorldNewsStats: "",
      BusinessStats: "",
      AfricaStats: "",
      unAuth: ["login", "register", "welcomePage"],
    };
  },
  methods: {
    Stats(value) {
      value == "WorldNewsStats"
        ? (this.WorldNewsStats = "active")
        : (this.WorldNewsStats = "");
      value == "BusinessStats"
        ? (this.BusinessStats = "active")
        : (this.BusinessStats = "");
      value == "AfricaStats" ? (this.AfricaStats = "active") : (this.AfricaStats = "");
    },
    logout() {
      session.removeItem("token");
      this.auth = false;
      router.push({ path: "/login" });
    },
  },
  created: function () {},
  watch: {
    $route(to, from) {
      console.log(to);
      if (session.getItem("token")) {
        this.auth = true;
        if (this.unAuth.includes(to.name)) {
          router.push({ path: "/" });
        }
      } else {
        this.auth = false;
        if (!this.unAuth.includes(to.name)) {
          router.push({ path: "/" });
        }
      }
    },
  },
};
</script>
