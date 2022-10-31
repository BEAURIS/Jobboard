<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <div>
    <h2>Annonces</h2>
    <Card />
  </div>
</template>

<script>
export default {
  name: "Annonces",
  components: {
    Card,
  },
};
</script>

<style scoped>
h2 {
justify-content: space-between;
text-align: center;



}
</style>