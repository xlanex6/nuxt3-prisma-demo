<template>
  <Menu/>

  <h1>ASYNCDATA</h1>
   <Posts :posts="posts"/>

</template>

<script setup>
const nuxtApp = useNuxtApp();

const { data: posts } = await useAsyncData("async", () =>
  nuxtApp.$prisma.post.findMany()
  
  // basic prisma api 

);

</script>
