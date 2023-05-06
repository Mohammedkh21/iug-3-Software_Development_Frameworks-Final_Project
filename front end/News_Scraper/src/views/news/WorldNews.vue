<template>
  <div>
    <NewsCover :type="type" />
  </div>
</template>

<script>
import NewsCover from "../../components/News/NewsCover.vue";

export default {
  name : "WorldNewsPage",
  components : {
    NewsCover,
  },
  data : function (){
    return {
      type : "news",
    }
  }
}
</script>