<template>

  <Menu/>

  <h1>API</h1>
  <Posts :posts="posts"/>
</template>

<script setup>

const { data: posts } = await useAsyncData("api", () => $fetch("/api/post"));

</script>
