<script setup>
import { ref } from 'vue';

</script>

<template>
  <header id="nav" class="w-full">
    <nav class="md:w-1/2 w-full md:ml-[10em] md:max-w-[1245px] absolute">
      <ul class="flex justify-between text-white serif text-3xl m-5">
        <li class="relative z-10 ease-out duration-300 px-4 hover:text-4xl hover:px-2">
          <router-link :to="{ name: 'Home' }" class="">Home</router-link>
        </li>
        <li class="relative z-10 ease-out duration-300 px-4 hover:text-4xl hover:px-2">
          <router-link :to="{ name: 'Projects' }">Projects</router-link>
        </li>
        <li class="relative z-10 ease-out duration-300 px-4 hover:text-4xl hover:px-1">
          <router-link :to="{ name: 'About' }">About me</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main id="app" class="relative">
    <div class="relative w-full min-h-screen max-w-[2490px] ">
      <router-view />
    </div>
    <div id="margin area"
      class="fixed top-0 right-0 bg-[#00B5A9] border-l-3 border-[#CA0130] h-full w-[calc(100vw-2490px)] hidden 3xl:block">
      <h3 class="text-white font-serif text-4xl top-[50%] left-[5em] relative">How big is your screen?</h3>
    </div>
  </main>
</template>

<style scoped></style>
