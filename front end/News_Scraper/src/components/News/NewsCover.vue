<template>
  <div class="container text-center col-8 pt-5">
    <div class="text-center col-12">
      <!-- v-for="num in 10" :key="num" -->
      <NewsTemplate
        :date="date"
        :photo="photo"
        :text="text"
        :title="title"
        v-for="num in 10"
        :key="num"
      />
    </div>
  </div>
</template>

<script>
import NewsTemplate from './NewsTemplate.vue'

export default {
  name: 'NewsCover',
  data: function () {
    return {
      date: 'March 8 2023',
      photo: './../../../src/assets/photo.jpg',
      text: 'text text text text text text text text ',
      title: 'title '
    }
  },
  props: ['type'],
  components: {
    NewsTemplate
  },
  created:function(){
    this.title = this.type
    console.log(this.type);
    

    
  },
  
}
</script>
