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
    <div class="4xl:hidden">
      <router-view />
    </div>
    <div class="hidden 4xl:flex">
      <h1 class="relative serif text-white text-6xl m-auto w-2/3 top-[10em]">Use a smaller screen brother, why are you
        using
        this big
        of a screen. It was already hard enough to make this website work on small screens. Go ahead zoom in</h1>
    </div>
  </main>
</template>

<style scoped></style>
