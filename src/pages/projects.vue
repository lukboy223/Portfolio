<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import redPanda from '@/components/redPanda.vue';
import ContactFooter from '@/components/ContactFooter.vue';
import { transitionPhase } from '@/router';

const projects = ref(null);
const projectType = ref('Github');
const GithubButton = ref('underline');
const otherButton = ref('');
const page = ref(1);
const hasMore = ref(true);
const nButton = ref('cursor-pointer');
const pButton = ref('opacity-0');
const loading = ref(true)
const title = ref('');
const titleText = ref('Projects');

const waitForTransition = () => {
    if (transitionPhase.value !== 'covering') return Promise.resolve();
    return new Promise((resolve) => {
        const stop = watch(transitionPhase, (phase) => {
            if (phase !== 'covering') {
                stop();
                resolve();
            }
        });
    });
};

onMounted(async () => {
    await waitForTransition();
    const titleArray = titleText.value.split('');

    for (const titleLetter of titleArray) {
        let isUppercase = false;
        if (titleLetter == titleLetter.toUpperCase()) {
            isUppercase = true;
        }

        await loopLetters(titleLetter.toLowerCase(), isUppercase);
        await new Promise(resolve => setTimeout(resolve, 10)); // Delay between letters
    }
});

const loopLetters = (targetLetter, isUppercase) => {
    return new Promise((resolve) => {
        const startLength = title.value.length;

        if (targetLetter === ' ') {
            title.value = title.value.substring(0, startLength) + ' ';
            resolve();
            return;
        }

        const steps = 5;
        const targetCode = targetLetter.charCodeAt(0);
        let currentCode = targetCode - steps;

        const interval = setInterval(() => {
            if (currentCode >= targetCode) {
                const finalLetter = isUppercase ? targetLetter.toUpperCase() : targetLetter;
                title.value = title.value.substring(0, startLength) + finalLetter;
                clearInterval(interval);
                resolve();
            } else {
                title.value = title.value.substring(0, startLength) + String.fromCharCode(currentCode);
                currentCode++;
            }
        }, 30);
    });
}



const fetchProjectsGithub = async () => {
    try {
        loading.value = true;
        const response = await axios.get('https://api.github.com/users/lukboy223/repos?sort=pushed&per_page=8&page=' + page.value);
        projects.value = response.data;
        hasMore.value = response.data.length == 8;
        loading.value = false;
    } catch (error) {
        console.error(error);
        loading.value = false;
    }
}

const fetchProjectsFile = () => {
    loading.value = true
    axios.get('https://ltve.eu/projects.json')
        .then(Response => {
            projects.value = Response.data;
            loading.value = false
        })
        .catch(error => console.error(error))
}

const projectTypeChange = async (type) => {
    if (type == 'Github') {
        projectType.value = 'Github'
        GithubButton.value = 'underline'
        otherButton.value = ''
        projects.value = '';
        await fetchProjectsGithub()
    } else {
        projectType.value = 'file'
        GithubButton.value = ''
        otherButton.value = 'underline'
        projects.value = '';
        await fetchProjectsFile()
    }
}

const ButtonSate = () => {

    if (page.value == 1) {
        pButton.value = 'opacity-0'
    } else {
        pButton.value = 'cursor-pointer'
    }
    if (hasMore.value) {
        nButton.value = 'cursor-pointer'
    } else {
        nButton.value = 'opacity-0'
    }
}

onMounted(() => {
    fetchProjectsGithub();
});

const switchPage = async (changer) => {
    if (changer == '+' && hasMore.value) {
        page.value = page.value + 1;
        await fetchProjectsGithub()
    } else if (changer == '-' && page.value > 1) {
        page.value = page.value - 1;
        await fetchProjectsGithub()
    }
    ButtonSate();

}


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
    <div class="overflow-hidden relative w-full 3xl:h-[260em] 2xl:h-[285em] lg:h-[250em] h-[295em]">
        <div class="overflow-hidden h-[160em] absolute xl:top-[10em] top-0 3xl:top-0  w-full">
            <div class="absolute bg-[#00B5A9] rotate-[-35deg] h-[50em] w-[300em] left-[-45em] z-[-9] 
        2xl:top-[28em] xl:top-[-2em] top-[-12em] lineBlock
        before:left-[30em]" id="rotated blue block top (right)">
            </div>


        </div>
        <div id="contentBG" class="absolute w-full overflow-hidden top-40
         3xl:h-[260em] 2xl:h-[285em] lg:h-[250em] h-[295em]">
            <div class="absolute bg-[#00B5A9] rotate-35 h-[40em] w-[45em] -z-10
            2xl:top-[60em] 
            xl:top-[40em] 
            lg:top-[30em] 
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
                <h1 class="serif text-white text-6xl w-[1em] m-auto leading-20">{{ title }}</h1>
            </div>
            <div id="projects"
                class="absolute text-white p-10 lg:w-[55em] top-[40em] md:top-[42em] lg:top-[30em] xl:top-[43em] xl:left-[15em] 2xl:top-[55em] 2xl:left-[32em] 3xl:top-[50em] 3xl:left-[27em]">
                <h2 class="serif text-5xl mb-20 lg:ml-[8em] z-20 text-right md:text-left">Highlighted <br> projects</h2>
                <ul class="sans text-xl md:top-0 relative top-[7em]">
                    <li class="mb-20 lg:ml-[10em] relative max-w-[30em] lg:grid grid-cols-6">
                        <div class="unset col-span-5">
                            <h3 class="text-3xl serif">Portfolio</h3>
                            <p class="mb-5">My Portfolio website which I have probably worked the longest on as I
                                thought it
                                would be fun to do this complicated design.</p>
                        </div>
                        <a href="https://github.com/lukboy223/Portfolio" target="_blank"
                            class=" px-6 py-2 h-min lg:mt-[2em] view-button">View</a>
                    </li>
                    <li class="mb-20 lg:mp-[3em] relative max-w-[30em] lg:grid grid-cols-6">
                        <div class="unset col-span-5">
                            <h3 class="text-3xl serif">MeTransfer</h3>
                            <p class="mb-5">A website I made together with another intern at my internship. The site is
                                an
                                file transfer application similar to WetTransfer.</p>
                        </div>
                        <a href="https://metransfer.nl" target="_blank"
                            class="px-6 py-2  h-min lg:mt-[2em] view-button">View</a>
                    </li>
                </ul>
            </div>
            <div id="blue block bottom" class="absolute bg-[#00B5A9] rotate-[-35deg] h-[100em] w-[200em] -z-10 
           
            top-[180em] left-[15em] 
            md:top-[185em] md:left-[20em]
            lg:top-[130em] lg:left-[50em]
            xl:top-[145em]
            2xl:top-[175em] 2xl:left-[70em]
            3xl:top-[155em] 3xl:left-[100em]
            ">
            </div>
            <div id="blue block bottom 2" class="absolute bg-[#00B5A9] rotate-[-35deg] h-[100em] w-[200em] z-[-8] blueLine
        top-[208.6em] left-[35em]
        after:top-[-35.1em]
        md:top-[209.6em] md:left-[37em] md:after:top-[-30.1em]
        lg:top-[158.6em] lg:left-[70em] lg:after:top-[-35.1em]
        xl:top-[173.6em]
        2xl:top-[199.3em] 2xl:left-[87em] 2xl:after:top-[-29.8em]
        3xl:top-[176.5em] 3xl:left-[115em] 3xl:after:top-[-26.4em]
        ">
            </div>
            <div id="footer credits" class="text-white serif m-1 absolute bottom-0 
        left-[5em] md:left-[10em] lg:left-[45em] xl:left-[50em] 2xl:left-[67em] 3xl:left-[93em]">
                Designed and engineered by Luka
            </div>
        </div>
        <div id="project list"
            class="absolute top-[110em] lg:top-[90em] xl:top-[110em] 2xl:top-[130em] 3xl:top-[110em] text-white sans p-5 w-full">
            <div class="mb-10 lg:mr-[3em] xl:mr-[5em] 3xl:mr-[20em] text-right">
                <h2 class="serif text-5xl leading-8 ">All projects
                    <br><span class="text-xl">Including school
                        projects</span>
                </h2>
                <div class="mt-1">
                    <span class="cursor-pointer" :class="GithubButton"
                        @click="projectTypeChange('Github')">Github</span> |
                    <span class="cursor-pointer" :class="otherButton" @click="projectTypeChange('File')">non
                        Github</span>
                </div>
            </div>
            <ul v-if="loading == false"
                class="text-lg grid grid-cols-1 lg:grid-cols-2 m-auto w-full sm:w-3/4 gap-4 relative lg:mt-[15em] 2xl:mt-[20em]">
                <li v-for="project in projects" class="m-auto w-3/4 mb-10 relative h-[9em]" :id="project.id">
                    <h3 class="text-3xl serif">- {{ project.name }}</h3>
                    <p>Last worked on: {{ formatDate(project.pushed_at) }}</p>
                    <p class="mb-2">{{ project.description }}</p>
                    <a v-if="project.html_url" :href="project.html_url" target="_blank"
                        class="text-2xl serif">Github</a>
                    <span v-if="project.homepage && project.html_url"> - </span><a v-if="project.homepage"
                        :href="project.homepage" target="_blank" class="text-2xl serif">Site</a>
                </li>
            </ul>
            <div v-else class="w-full text-center mt-[20em]">
                <h3 class="text-5xl serif italic">Loading...</h3>
            </div>
            <div class="relative m-auto flex justify-between text-lg w-3/4"
                v-if="projectType == 'Github' && loading == false">
                <button @click="switchPage('-')" :disabled="page == 1" :class="pButton"><- prev</button>
                        <button @click=" switchPage('+')" :disabled="!hasMore" :class="nButton">next -></button>
            </div>
        </div>

        <div id="symbol art" class="mono w-[1435px] absolute text-[#CA0130] font-black 
    3xl:top-[225em] 3xl:right-[-10em] 
    2xl:top-[252em] 2xl:right-[-22em] 
    lg:top-[220em] lg:right-[-25em] 
    sm:top-[280em]
    top-[288em] right-[-31em] 
    z-[-9]">
            <redPanda />
        </div>
        <ContactFooter breakpoint="lg" class="absolute ml-10
        top-[270em]
        lg:top-[215em] lg:left-[10.5em]
        xl:top-[228em] xl:left-[9.5em]
        2xl:top-[258em] 2xl:left-[29.5em]
        3xl:top-[238em] 3xl:left-[59em]" />

    </div>
</template>

<style scoped>
.line::before {
    height: 0 !important;
    top: 0 !important;
}
</style>
