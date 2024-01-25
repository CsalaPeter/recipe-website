<template>
  <h1>Home</h1>
</template>

<script setup lang="js">
import { onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
  axios.get('/api/').then((response) => {
    console.log(response)
  })
})
</script>
