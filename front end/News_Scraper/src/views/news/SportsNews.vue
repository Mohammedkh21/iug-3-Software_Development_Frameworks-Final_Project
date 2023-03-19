<template>
  <div>
    <NewsCover :type="type" />
  </div>
</template>

<script>
import NewsCover from "../../components/News/NewsCover.vue";

export default {
  name : "SportPage",
  components : {
    NewsCover,
  },
  data : function (){
    return {
      type : "Sport",
    }
  }
}
</script>