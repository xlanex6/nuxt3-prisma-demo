<template>

  <Menu/>

  <h1>API</h1>
  <div
    v-for="{id, title, content } in posts"
    :key="id"
  >
  <h3>{{id}} - {{title}}</h3>

  <p>{{content}}</p>

  </div>
</template>

<script setup>

const { data: posts } = await useAsyncData("api", () => $fetch("/api/post"));

</script>
