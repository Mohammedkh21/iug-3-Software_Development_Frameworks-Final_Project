<template>
  <NewsShow :img="data.img" :title="data.title" :text="data.text" />
</template>

<script>
import NewsShow from "../components/News/NewsShow.vue";

export default {
  name: "NewsPage",
  data: function () {
    return {
      data: [],
    };
  },
  components: {
    NewsShow,
  },
  props: ["type", "slug"],
  created: function () {
    this.title = this.type;
    this.getData();
  },
  methods: {
    async getData() {
      const res = await fetch(
        "http://localhost:5050/News/" + this.type + "/" + this.slug
      );
      const resNews = await res.json();
      this.data = resNews;
    },
  },
};
</script>
<style>
.div1 {
  height: calc(100vh - 75.5px);
}
</style>
