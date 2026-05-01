<script setup>
import { computed } from 'vue';
import { transitionPhase, TRANSITION_MS } from '@/router';

const blocks = [
    { heightVh: 180, leftVw: -100 },
    { heightVh: 200, leftVw: -75 },
    { heightVh: 220, leftVw: -55 },
    { heightVh: 250, leftVw: -35 },
    { heightVh: 280, leftVw: -15 },
    { heightVh: 310, leftVw: 5 },
    { heightVh: 340, leftVw: 25 },
    { heightVh: 360, leftVw: 50 },
    { heightVh: 350, leftVw: 75 },
    { heightVh: 340, leftVw: 100 },
    { heightVh: 330, leftVw: 125 },
    { heightVh: 320, leftVw: 150 },
    { heightVh: 310, leftVw: 175 },
    { heightVh: 300, leftVw: 200 },
    { heightVh: 290, leftVw: 225 },
    { heightVh: 280, leftVw: 250 },
    { heightVh: 270, leftVw: 275 },
    { heightVh: 260, leftVw: 305 },
];

const translateY = computed(() => {
    if (transitionPhase.value === 'covering') return '0%';
    if (transitionPhase.value === 'retracting') return '180%';
    return '-180%'; // idle: parked above viewport
});

const animated = computed(() => transitionPhase.value !== 'idle');
const isHidden = computed(() => transitionPhase.value === 'idle');
</script>

<template>
    <div class="fixed inset-0 z-100 pointer-events-none overflow-hidden" :class="{ 'invisible': isHidden }">
        <div v-for="(b, i) in blocks" :key="i" class="absolute bg-[#00B5A9] origin-top ease-in-out" :style="{
            top: '0',
            left: `${b.leftVw}vw`,
            width: 'max(60vw, 80vh)',
            height: `${b.heightVh}vh`,
            transform: `rotate(55deg) translateY(${translateY})`,
            transitionProperty: 'transform',
            transitionDuration: animated ? `${TRANSITION_MS}ms` : '0ms',
        }" />
    </div>
</template>
