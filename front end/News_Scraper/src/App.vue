<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template >
  <header class="sticky-top bg-white" >
    <div class="wrapper ">
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
  </header>
  <p>{{  NewAge }}</p>
  <RouterView />
</template>

<script>
export default {
  data: function () {
    return {
      WorldNewsStats: '',
      BusinessStats: '',
      AfricaStats: ''
    }
  },
  methods: {
    Stats(value) {
      value == 'WorldNewsStats' ? (this.WorldNewsStats = 'active') : (this.WorldNewsStats = '')
      value == 'BusinessStats' ? (this.BusinessStats = 'active') : (this.BusinessStats = '')
      value == 'AfricaStats' ? (this.AfricaStats = 'active') : (this.AfricaStats = '')
    }
  },
  computed: {

  },
}
</script>


