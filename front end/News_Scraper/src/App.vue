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
              v-on:click="Stats('PoliticStats')"
              :class="PoliticStats"
              class="nav-link fs-3"
              to="/Politic"
              >Politics</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-on:click="Stats('SportStats')"
              :class="SportStats"
              class="nav-link fs-3"
              to="/Sport"
              >Sports</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-on:click="Stats('EconomyStats')"
              :class="EconomyStats"
              class="nav-link fs-3"
              to="/Economy"
              >Economy</RouterLink
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
      PoliticStats: '',
      SportStats: '',
      EconomyStats: ''
    }
  },
  methods: {
    Stats(value) {
      value == 'PoliticStats' ? (this.PoliticStats = 'active') : (this.PoliticStats = '')
      value == 'SportStats' ? (this.SportStats = 'active') : (this.SportStats = '')
      value == 'EconomyStats' ? (this.EconomyStats = 'active') : (this.EconomyStats = '')
      console.log(value)
    }
  },
  computed: {

  },
}
</script>


