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

const showEmail = (movement) => {
    email.value = movement === 'on' ? 'opacity-100' : 'opacity-0';
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
            <li class="mb-15" :class="isLg ? 'lg:ml-[5em]' : 'md:ml-[5em]'">
                <a href="https://www.linkedin.com/in/luka-van-ekeren-b270a3321/" target="_blank"
                    class="underline">Linkedin</a>
            </li>
            <li>
                <a href="https://github.com/lukboy223" target="_blank" class="underline">Github</a>
            </li>
        </ul>
    </div>
</template>
