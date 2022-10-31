<template lang="pug">
.container(@click="changeStatus()")
  input(v-model="status" type="checkbox")
  label(v-if="props.text") {{props.text}}
</template>

<script setup lang="ts">
  import router from '@/router';  
  import { ref } from 'vue';
  const props = defineProps({
    text: String,
  })

  const status = ref(false)

  function changeStatus() {
    status.value = !status.value;
  }
</script>

<style lang="sass">
</style>