<template>
  <div class="loading-data">
    <img src="/img/index.svg" />
    <h3>Loading {{ label }}. Please wait ...</h3>
  </div>
</template>

<script setup>
const { label } = defineProps(["label"]);
</script>

<style scoped>
.loading-data {
  margin: 150px auto !important;
  text-align: center;
}

.loading-data img {
  margin: 20px auto;
}
</style>
