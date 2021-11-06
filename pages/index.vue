<template>

  <Menu/>

  <h1>Composition API</h1>
  <div
    v-for="{id, title} in posts"
    :key="id"
  >
    {{id}} - {{title}}

  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();

const posts = await nuxtApp.$prisma.post.findMany();
</script>
