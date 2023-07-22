<template>
  <div class="no-data">
    <img src="/img/no_events.png" />
    <h3>{{ label }} will be posted here</h3>
  </div>
</template>

<script setup>
const { label } = defineProps(["label"]);
</script>

<style scoped>
.no-data {
  margin: 80px auto !important;
  text-align: center;
}

.no-data img {
  width: 50%;
  margin: 0 auto;
}
</style>
