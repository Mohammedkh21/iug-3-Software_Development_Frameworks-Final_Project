<template>
  <div id="card" class="">
    <div class="container-fluid m-0 p-0 justify-content-center d-flex">
      <div class="w-50 bg-light justify-content-center d-flex">
        <div class="w-100">
          <div>
            <img class="img-fluid w-100" :src="img" alt="" />
          </div>
          <div class="p-3">
            <h4 class="text-center p-3">
              {{ title }}
            </h4>
            <p>
              {{ text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsShow",
  props: ["title", "text", "img"],
};
</script>

<style scoped></style>
