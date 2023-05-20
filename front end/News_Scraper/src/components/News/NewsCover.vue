<template>
  <div class="container text-center col-8 pt-5">
    <div class="text-center col-12">
      <!-- v-for="num in 10" :key="num" -->
      <RouterLink
        v-for="n in this.News"
        :to="n.link"
        style="text-decoration: none; color: black"
      >
        <NewsTemplate
          :date="n.date"
          :photo="n.img"
          :description="n.description"
          :title="n.title"
          :link="n.link"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import NewsTemplate from "./NewsTemplate.vue";
import api from "../../api";
import router from "../../router";

export default {
  name: "NewsCover",
  data: function () {
    return {
      News: [],
    };
  },
  props: ["type"],
  components: {
    NewsTemplate,
  },
  created: function () {
    api.getAllNews(this.type).then((result) => {
      if (result.data.status >= 400) {
        router.push({ name: "welcomePage" });
      }
      this.News = result.data;
    });
  },
  methods: {},
};
</script>
