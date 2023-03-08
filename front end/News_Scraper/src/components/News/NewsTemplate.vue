<template>
  <div class="">
    
    <div class="col-12 row border-bottom mb-5">
      <div class="col-4">
        <img :src="photo" class="img-fluid" />
      </div>
      <div class="col-8 text-start">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
      </div>
      <div class="pt-3">
        <p class="opacity-50">{{ date }}</p>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'NewsTemplate',
  props: ['photo', 'title', 'text', 'date']
}
</script>

<style scoped></style>
