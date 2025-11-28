<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const projects = ref(null);

onMounted(() => {
    axios.get('https://api.github.com/users/lukboy223/repos?sort=pushed')
        .then(Response => (projects.value = Response.data))
        .catch(error => console.error(error))
});

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
};
</script>

<template>
    <div class="overflow-hidden h-[160em] absolute xl:top-[10em] top-0 3xl:top-0  w-full">
        <div class="absolute bg-[#00B5A9] rotate-[-35deg] h-[50em] w-[300em] left-[-45em] z-[-9] 
        2xl:top-[28em] xl:top-[-2em] top-[-12em] lineBlock
        before:left-[30em]" id="rotated blue block top (right)">
        </div>


    </div>
    <div id="contentBG" class="absolute w-full overflow-hidden top-40
    2xl:h-[170em] xl:h-[145em] lg:h-[120em] md:h-[130em] h-[180em]">
        <div class="absolute bg-[#00B5A9] rotate-35 h-[40em] w-[45em] -z-10
            2xl:top-[60em] 2xl:left-[-17em] 
            xl:top-[40em] xl:left-[-17em]
            lg:top-[30em] lg:left-[-17em]
            top-[60em] left-[-17em]
            lg:block
            hidden
            " id="rotated blue block top (left)">
        </div>
        <div id="line" class="absolute w-[300em] rotate-35 h-[3px] lg:top-[30.5em] lg:left-[-110em] bg-[#00B5A9] line z-[-7]
            top-[35em] md:left-[-120em] left-[-170em]
            2xl:before:left-[182.6em] xl:before:left-[156.4em] lg:before:left-[139.1em] md:before:left-[141.2em] before:left-[171.7em]
            3xl:before:left-[173.9em] before:w-[53.2em]">
        </div>

        <div class="w-full" id="title">
            <h1 class="serif text-white text-6xl w-[1em] m-auto leading-20">Projects</h1>
        </div>
        <div id="projects"
            class="absolute text-white p-10 lg:w-[55em] top-[40em] md:top-[42em] lg:top-[30em] xl:top-[43em] xl:left-[15em] 2xl:top-[55em] 2xl:left-[32em] 3xl:top-[50em] 3xl:left-[27em]">
            <h2 class="serif text-5xl mb-20 lg:ml-[8em] z-20 text-right md:text-left">Highlighted <br> projects</h2>
            <ul class="sans text-xl md:top-0 relative top-[7em]">
                <li class="mb-20 lg:ml-[10em] relative md:max-w-[30em] max-w-[18em]">
                    <div class="w-3/4">
                        <h3 class="text-3xl serif">Project name</h3>
                        <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum
                            magni,
                            soluta
                            velit suscipit</p>
                    </div>
                    <a href="" target="_blank"
                        class="serif text-3xl px-6 py-2 bg-[#CA0130] h-min lg:absolute bottom-0 right-0">View</a>
                </li>
                <li class="mb-20 lg:mp-[3em] relative md:max-w-[30em]">
                    <div class="w-3/4">
                        <h3 class="text-3xl serif">Project name</h3>
                        <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum magni,
                            soluta
                            velit suscipit</p>
                    </div>
                    <a href="" target="_blank"
                        class="serif text-3xl px-6 py-2 bg-[#CA0130] h-min lg:absolute bottom-0 right-0">View</a>
                </li>
            </ul>
        </div>

    </div>
    <div
        class="absolute top-[113em] lg:top-[90em] xl:top-[110em] 2xl:top-[130em] 3xl:top-[110em] text-white sans p-5 w-full">
        <h2 class="serif text-5xl mb-10 leading-8 text-right lg:mr-[3em] xl:mr-[5em] 3xl:mr-[9em]">All projects
            <br><span class="text-xl">Including school
                projects</span>
        </h2>
        <ul
            class="text-lg grid grid-cols-1 sm:grid-cols-2 m-auto w-full sm:w-3/4 gap-4 relative lg:top-[15em] 2xl:top-[20em]">
            <li v-for="project in projects" class="m-auto w-3/4 mb-10" :id="project.id">
                <h3 class="text-3xl serif">- {{ project.name }}</h3>
                <p>Last worked on: {{ formatDate(project.pushed_at) }}</p>
                <p class="mb-2">{{ project.description }}</p>
                <a :href="project.html_url" target="_blank" class="text-2xl serif">Github</a>
                <span v-if="project.homepage"> - <a :href="project.homepage" target="_blank"
                        class="text-2xl serif">Site</a></span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.line::before {
    height: 0 !important;
    top: 0 !important;
}
</style>
