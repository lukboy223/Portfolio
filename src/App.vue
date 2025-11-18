<script setup>
</script>

<template>
  <header id="nav" class="w-full">
    <nav class="md:w-1/2 w-full md:ml-[10%]">
      <ul class="flex justify-between text-white font-serif text-2xl m-5">
        <li class="relative">
          <div
            class="absolute bg-[#00B5A9] rotate-[-35deg] -z-10 w-[20em] h-[3em] top-[-426%] left-[-60%] translate-y-[-125%] translate-x-[27%] duration-500"
            id="Home">
          </div>
          <router-link :to="{ name: 'Home' }" onmouseenter="navButtonAnimation('start', 'Home')"
            onmouseleave="navButtonAnimation('leave', 'Home')">Home</router-link>
        </li>
        <li class="relative">
          <div
            class="absolute bg-[#00B5A9] rotate-[-35deg] -z-10 w-[20em] h-[3em] top-[-426%] left-[-43%] translate-y-[-125%] translate-x-[27%] duration-500"
            id="Projects">
          </div>
          <router-link :to="{ name: 'Projects' }" onmouseenter="navButtonAnimation('start', 'Projects')"
            onmouseleave="navButtonAnimation('leave', 'Projects')">Projects</router-link>
        </li>
        <li class="relative">
          <div
            class="absolute bg-[#00B5A9] rotate-[-35deg] -z-10 w-[20em] h-[3em] top-[-426%] left-[-60%] translate-y-[-125%] translate-x-[27%] duration-500"
            id="About">
          </div>
          <router-link :to="{ name: 'About' }" onmouseenter="navButtonAnimation('start', 'About')"
            onmouseleave="navButtonAnimation('leave', 'About')">About me</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main id="app" class="relative mt-40">
    <router-view />
  </main>
</template>

<style scoped></style>
