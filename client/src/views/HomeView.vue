<template>
  <h1>Home</h1>
  <div class="recipe-cards">
    <article class="card" v-for="recipe in recipes" :key="recipe.id">
      <header>
        <h2>{{ recipe.name }}</h2>
      </header>
      <img :src="recipe.img" />
      <footer>
        <div class="shortDesc">{{ recipe.shortDesc }}</div>
      </footer>
    </article>
  </div>
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

<style>
.recipe-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding-inline: 2rem;
}

.card {
  background-color: burlywood;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 240px;
}

.card header h2 {
  text-align: center;
}

footer {
  padding-block: 10px;
}

.shortDesc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  padding-inline: 10px;
}
</style>
