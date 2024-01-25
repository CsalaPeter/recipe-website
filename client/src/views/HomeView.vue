<template>
  <h1>Home</h1>
  <div v-for="recipe in recipes" :key="recipe.id">{{ recipe.name }}</div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const recipes = ref()

onMounted(() => {
  axios.get('/api/').then((response) => {
    console.log(response.data)
    recipes.value = response.data
    console.log(recipes)
  })
})
</script>
