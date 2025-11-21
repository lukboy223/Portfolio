<script setup>
</script>

<template>
  <header id="nav" class="w-full">
    <nav class="md:w-1/2 w-full md:ml-[10%] absolute">
      <ul class="flex justify-between text-white font-serif text-2xl m-5">
        <li class="relative">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="relative">
          <router-link :to="{ name: 'Projects' }">Projects</router-link>
        </li>
        <li class="relative">
          <router-link :to="{ name: 'About' }">About me</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main id="app" class="relative">
    <router-view />
  </main>
</template>

<style scoped></style>
