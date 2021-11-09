<template>

{{nuxtApp}}

</template>

<script setup>
const data = await useFetch("https://pokeapi.co/api/v2/ability");
const nuxtApp = useNuxtApp()

nuxtApp.$prisma.post.findAll()
</script>
