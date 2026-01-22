<script setup>
import redPanda from '@/components/redPanda.vue';

</script>

<template>
    <div class="overflow-hidden h-[160em] absolute xl:top-[10em] top-0 3xl:top-0  w-full">
        <div class="absolute bg-[#00B5A9] rotate-[-35deg] h-[50em] w-[300em] left-[-45em] z-[-9] 
        2xl:top-[28em] xl:top-[-2em] top-[-12em] lineBlock
        before:left-[30em]" id="rotated blue block top (right)">
        </div>


    </div>
    <div id="contentBG" class="absolute w-full overflow-hidden top-40
         3xl:h-[260em] 2xl:h-[285em] lg:h-[250em] h-[295em]">
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
            top-[35em] md:left-[-145em] left-[-195em]
            2xl:before:left-[182.6em] xl:before:left-[156.4em] lg:before:left-[139.1em] md:before:left-[156.5em] before:left-[187em]
            3xl:before:left-[173.9em] before:w-[53.2em]">
        </div>

        <div class="w-full" id="title">
            <h1 class="serif text-white text-6xl w-[5em] m-auto leading-20">About me</h1>
        </div>
        <div id="about small"
            class="right-0 absolute md:w-[30em] w-full top-[40em] md:top-[25em] lg:top-[10em] xl:top-[20em] 2xl:top-[35em] 3xl:top-[15em] 3xl:w-[40em] text-right text-white p-10">
            <h2 class="serif text-5xl mb-5 leading-6">In short</h2>
            <p class="sans text-xl mb-5">Hi! I am Luka, currently I am student at <a href="https://mboutrecht.nl/"
                    class="underline" target="_blank">MBO
                    Utrecht</a> learning to
                become software
                developer. For my study I am currently doing an internship at <a href="https://depositado.com/"
                    class="underline" target="_blank">Depositado</a> to gain experience in the field as a developer. As
                of
                now I specialize in web development and like to challenge myself with difficult front-end designs and
                complicated back-end problems.
            </p>
        </div>
        <div id="about big"
            class="absolute text-xl text-white p-10 lg:w-[55em] top-[100em] md:top-[42em] lg:top-[30em] xl:top-[45em] xl:left-[15em] 2xl:top-[55em] 2xl:left-[32em] 3xl:top-[50em] 3xl:left-[27em]">
            <p>Hello my name is Luka, I am a student at <a href="https://mboutrecht.nl/" class="underline"
                    target="_blank">MBO Utrecht</a> learning to be a software developer. Currently I am doing an
                internship at <a href="https://depositado.com/" class="underline" target="_blank">Depositado</a> and
                planning to continue studying afterwards. My main interest with coding is back-end development of
                websites, but I also like to build front-end designs. </p>
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
        class="absolute top-[113em] lg:top-[90em] xl:top-[110em] 2xl:top-[130em] 3xl:top-[110em] text-white sans p-5 w-full">

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
    <div id="footer contact" class="absolute ml-10 
        top-[270em] 
        lg:top-[215em] lg:left-[10.5em]
        xl:top-[228em] xl:left-[9.5em]
        2xl:top-[258em] 2xl:left-[29.5em]
        3xl:top-[238em] 3xl:left-[59em]
        ">
        <h3 class="serif text-white text-5xl mb-20
            lg:ml-[7em]">Contact</h3>
        <ul class="text-white underline text-2xl sans">
            <li class="mb-15 
                lg:ml-[10em] 
                "><a href="mailto:mail@mail.com">E-mail</a></li>
            <li class="mb-15
                lg:ml-[5em]
                "><a href="https://www.linkedin.com/in/luka-van-ekeren-b270a3321/" target="_blank">Linkedin</a></li>
            <li><a href="https://github.com/lukboy223" target="_blank">Github</a></li>
        </ul>
    </div>

</template>

<style scoped>
.line::before {
    height: 0 !important;
    top: 0 !important;
}
</style>
