<template>
    <router-view></router-view>
       <EditEntreprise />
   </template>
    
   <script>
   import EditEntreprise from '../components/EditEntreprise.vue';
       export default {
       data() {
           return {
               advertisement: [],
               company: {},
           };
       },
       components: { EditEntreprise }
   }
   </script>