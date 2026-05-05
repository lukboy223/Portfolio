<script setup>
import { ref } from 'vue';

const props = defineProps({
    breakpoint: {
        type: String,
        default: 'md',
        validator: (v) => ['md', 'lg'].includes(v),
    },
});

const email = ref('opacity-0');
const linkedin = ref('opacity-0');
const github = ref('opacity-0');

const showEmail = (movement) => {
    email.value = movement === 'on' ? 'opacity-100' : 'opacity-0';
};
const showLinkedin = (movement) => {
    linkedin.value = movement === 'on' ? 'opacity-100' : 'opacity-0';
};
const showGithub = (movement) => {
    github.value = movement === 'on' ? 'opacity-100' : 'opacity-0';
};

const isLg = props.breakpoint === 'lg';
</script>

<template>
    <div>
        <h3 class="serif text-white text-5xl mb-20" :class="isLg ? 'lg:ml-[7em]' : 'md:ml-[7em]'">Contact</h3>
        <ul class="text-white text-2xl sans">
            <li class="mb-15 w-fit" :class="isLg ? 'lg:ml-[10em]' : 'md:ml-[10em]'" v-on:mouseover="showEmail('on')"
                v-on:mouseleave="showEmail('off')">
                <a href="mailto:contact@ltve.eu" class="underline">E-mail</a>
                <div class="text-base absolute duration-200" :class="email">contact@ltve.eu</div>
            </li>
            <li class="mb-15" :class="isLg ? 'lg:ml-[5em]' : 'md:ml-[5em]'" v-on:mouseover="showLinkedin('on')"
                v-on:mouseleave="showLinkedin('off')">
                <a href="https://www.linkedin.com/in/luka-van-ekeren" target="_blank" class="underline">Linkedin</a>
                <div class="text-base absolute duration-200" :class="linkedin">linkedin.com/in/luka-van-ekeren</div>

            </li>
            <li v-on:mouseover="showGithub('on')" v-on:mouseleave="showGithub('off')">
                <a href="https://github.com/lukboy223" target="_blank" class="underline">Github</a>
                <div class="text-base absolute duration-200" :class="github">github.com/lukboy223</div>
            </li>
        </ul>
    </div>
</template>
