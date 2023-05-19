<template>
  <NewsShow :img="data.img" :title="data.title" :text="data.text" />
</template>

<script>
import NewsShow from "../components/News/NewsShow.vue";
import api from "../api";

export default {
  name: "NewsPage",
  data: function () {
    return {
      data: {},
    };
  },
  components: {
    NewsShow,
  },
  props: ["type", "slug"],
  created: function () {
    api.getNews(this.type, this.slug).then((result) => {
      console.log(result);
      this.data = result.data;
    });
  },
  methods: {},
};
</script>
<style>
.div1 {
  height: calc(100vh - 75.5px);
}
</style>
