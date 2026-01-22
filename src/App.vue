<script setup>
</script>

<template>
  <header id="nav" class="w-full">
    <nav class="md:w-1/2 w-full md:ml-[10%] absolute">
      <ul class="flex justify-between text-white font-serif text-2xl m-5">
        <li class="relative z-10">
          <router-link :to="{ name: 'Home' }" class="">Home</router-link>
        </li>
        <li class="relative z-10">
          <router-link :to="{ name: 'Projects' }">Projects</router-link>
        </li>
        <li class="relative z-10">
          <router-link :to="{ name: 'About' }">About me</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main id="app" class="relative">
    <div class="relative w-full min-h-screen max-w-[2500px] ">
      <router-view />
    </div>
    <div id="margin area"
      class="fixed top-0 right-0 bg-[#00B5A9] border-l-3 border-[#CA0130] h-full w-[calc(100vw-2500px)] hidden 3xl:block">
    </div>
  </main>
</template>

<style scoped></style>
