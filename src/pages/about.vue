<script setup>
import { ref, onMounted, watch } from 'vue';
import redPanda from '@/components/redPanda.vue';
import aboutSmall from '@/components/aboutSmall.vue';
import ContactFooter from '@/components/ContactFooter.vue';
import { transitionPhase } from '@/router';

const title = ref('');
const titleText = ref('About me');

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
</script>

<template>
    <div
        class="overflow-hidden w-full  3xl:h-[205em] 2xl:h-[225em] xl:h-[210em] lg:h-[183em] md:h-[205em] h-[275em] relative">

        <div class="overflow-hidden h-[160em] absolute xl:top-[10em] top-0 3xl:top-0  w-full">
            <div class="absolute bg-[#00B5A9] rotate-[-35deg] h-[50em] w-[300em] left-[-45em] z-[-9] 
        2xl:top-[28em] xl:top-[-2em] top-[-12em] lineBlock
        before:left-[30em]" id="rotated blue block top (right)">
            </div>


        </div>
        <div id="contentBG" class="absolute w-full overflow-hidden top-40
         3xl:h-[205em] 2xl:h-[225em] xl:h-[210em] lg:h-[183em] md:h-[205em] h-[275em]">
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
            top-[35em] md:left-[-145em] left-[-195em]
            2xl:before:left-[182.6em] xl:before:left-[156.4em] lg:before:left-[139.1em] md:before:left-[156.5em] before:left-[187em]
            3xl:before:left-[173.9em] before:w-[53.2em]">
            </div>

            <div class="w-full" id="title">
                <h1 class="serif text-white text-6xl w-[5em] m-auto leading-20">{{ title }}</h1>
            </div>
            <div id="about small"
                class="right-0 absolute md:w-[30em] w-full top-[40em] md:top-[25em] lg:top-[10em] xl:top-[20em] 2xl:top-[35em] 3xl:top-[15em] 3xl:w-[40em] text-right text-white p-10">
                <h2 class="serif text-5xl mb-5 leading-6">In short</h2>
                <aboutSmall />
            </div>
            <div id="about big"
                class="absolute text-xl text-white sans lg:w-[40em] xl:w-[45em] p-10 top-[85em] md:top-[38em] md:w-[25em] lg:top-[36em] xl:top-[45em] xl:left-[10em] 2xl:top-[55em] 2xl:left-[32em] 3xl:top-[50em] 3xl:left-[27em]">
                <h2 class="serif text-5xl mb-5 leading-6">About</h2>
                <p>
                    Hello my name is Luka, I am a 18 year old student living in the Netherlands, currently I am studying
                    at
                    <a href="https://mboutrecht.nl/" class="underline" target="_blank">MBO Utrecht</a>
                    to become a full fledged software developer. Currently I am in my last year of my course which
                    consists
                    out of an entire school year of internship, currently I am working at
                    <a href="https://depositado.com/" class="underline" target="_blank">Depositado</a>
                    as an intern. After I finished my internship and course I plan to continue studying to get my
                    bachelors
                    degree in software development. <br>
                    <br>
                    Although working on complicated back-end infrastructures is what I like most, I also like realizing
                    creative front-end designs to make the website look clean and professional. As of now I primarily
                    code
                    in PHP, HTML, CSS, JavaScript and SQL working with different frameworks such as Laravel and Vue. On
                    top
                    of that I have experience working with SCRUM and Github.
                </p>
            </div>
            <div id="blue block bottom" class="absolute bg-[#00B5A9] rotate-[-35deg] h-[100em] w-[200em] -z-10 
            top-[160em] left-[15em] 
            md:top-[95em] md:left-[20em]
            lg:top-[70em] lg:left-[50em]
            xl:top-[100em]
            2xl:top-[120em] 2xl:left-[70em]
            3xl:top-[100em] 3xl:left-[100em]
            ">
            </div>
            <div id="blue block bottom 2" class="absolute bg-[#00B5A9] rotate-[-35deg] h-[100em] w-[200em] z-[-8] blueLine
        top-[188.6em] left-[35em]
        after:top-[-35.1em]
        md:top-[119.6em] md:left-[37em] md:after:top-[-30.1em]
        lg:top-[98.6em] lg:left-[70em] lg:after:top-[-35.1em]
        xl:top-[128.6em]
        2xl:top-[144.3em] 2xl:left-[87em] 2xl:after:top-[-29.8em]
        3xl:top-[121.5em] 3xl:left-[115em] 3xl:after:top-[-26.4em]
        ">
            </div>
            <div id="footer credits" class="text-white serif m-1 absolute bottom-0 
        left-[5em] md:left-[10em] lg:left-[45em] xl:left-[50em] 2xl:left-[67em] 3xl:left-[93em]">
                Designed and engineered by Luka
            </div>
        </div>
        <div id="Work experience"
            class="absolute top-[180em] md:top-[113em] lg:top-[90em] xl:top-[110em] 2xl:top-[130em] 3xl:top-[110em] text-white sans p-5 w-full">
            <div class="mb-10 lg:mr-[3em] xl:mr-[5em] 3xl:mr-[20em] text-right">
                <h2 class="serif text-5xl leading-8 ">Working experience
                    <br><span class="text-xl">Excluding student jobs</span>
                </h2>
            </div>
            <ul
                class="text-lg grid grid-cols-1 lg:grid-cols-2 m-auto w-full sm:w-3/4 gap-4 relative lg:mt-[15em] 2xl:mt-[20em]">
                <li class="m-auto w-3/4 mb-10 relative h-[9em]">
                    <h3 class="text-3xl serif">Intern - Depositado</h3>
                    <p class="before:content-['-'] before:mr-2">September 1, 2025, to present <br> 4 to 5 days a week
                    </p>
                    <p class="mt-2">My first "job" as a software developer. At this internship I am learning about the
                        process of building a website, from the request of a customer to the finished result.</p>
                </li>
            </ul>
        </div>

        <div id="symbol art" class="mono w-[1435px] absolute text-[#CA0130] font-black 
    3xl:top-[160em] 3xl:right-[-15em] 
    2xl:top-[184em] 2xl:right-[-22em] 
    xl:top-[170em] xl:right-[-25em] 
    lg:top-[150em] lg:right-[-25em]
    md:top-[160em] 
    top-[250em] right-[-31em] 
    z-[-9]">
            <redPanda />
        </div>
        <ContactFooter breakpoint="lg" class="absolute ml-10
        top-[250em]
        md:top-[180em]
        lg:top-[155em] lg:left-[10.5em]
        xl:top-[185em] xl:left-[9.5em]
        2xl:top-[205em] 2xl:left-[29.5em]
        3xl:top-[185em] 3xl:left-[59em]" />
    </div>

</template>

<style scoped>
.line::before {
    height: 0 !important;
    top: 0 !important;
}
</style>
