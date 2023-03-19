<template>
  <div>
    <NewsCover :type="type" />
  </div>
</template>

<script>
import NewsCover from "../../components/News/NewsCover.vue";

export default {
  name : "PoliticPage",
  components : {
    NewsCover,
  },
  data : function (){
    return {
      type : "Politic",
    }
  }
}
</script>