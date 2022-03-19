<template>

  <Menu/>

  <h1>Composition API</h1>
  
  <Posts :posts="posts"/>

</template>

<script setup>
const nuxtApp = useNuxtApp();

const posts = await nuxtApp.$prisma.post.findMany();
</script>
