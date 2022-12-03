<template lang="pug">
#modals
AppBar
RouterView.router

</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from '@/components/AppBar.vue'
</script>

<style>
.router {
  min-height: 100%;
  overflow-x: hidden;
  background-color: #f9f9f9
}
</style>