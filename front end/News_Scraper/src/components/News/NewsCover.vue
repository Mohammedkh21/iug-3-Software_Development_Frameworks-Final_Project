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
    this.title = this.type;
    this.getData();
  },
  methods: {
    async getData() {
      const res = await fetch("http://localhost:5050/allNews/" + this.type);
      const resNews = await res.json();
      this.News = resNews;
    },
  },
};
</script>
