<template>
  <Menu/>

  <h1>ASYNCDATA</h1>
  <div
    v-for="{id, title} in posts"
    :key="id"
  >
    {{id}} - {{title}}

  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();

const { data: posts } = await useAsyncData("async", () =>
  nuxtApp.$prisma.post.findMany()
  
  // basic prisma api 

);

</script>
