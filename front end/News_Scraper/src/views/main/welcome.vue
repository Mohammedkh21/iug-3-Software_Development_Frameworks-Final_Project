<template>
  <div class="text-center justify-content-center mt-5">
    <div class="">
      <div class="col-12">
        <h1 class="">Scrap News</h1>
      </div>
      <div class="col-12 row">
        <div class="col-6">
          <RouterLink to="/login" style="text-decoration: none"
            ><h2>Login</h2></RouterLink
          >
        </div>
        <div class="col-6">
          <RouterLink to="/register" style="text-decoration: none"
            ><h2>register</h2></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "welcomePage",
  data: function () {
    return {
      auth: false,
      WorldNewsStats: "",
      BusinessStats: "",
      AfricaStats: "",
    };
  },
  methods: {},
  computed: {},
};
</script>
