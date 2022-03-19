<template>
<div
    v-for="{id, title, content } in posts"
    :key="id"
  >
  <h3>{{id}} - {{title}}</h3>

  <p>{{content}}</p>

  </div>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Object,
  }
})
</script>
