<template>
    <v-app id="inspire">
        <v-content class="live-background">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
	export default {
		mounted() {
		},
		props: {
			source: String,
		},
	}
</script>

<style>
    .live-background {
        animation: colorchange 50s; /* animation-name followed by duration in seconds*/
        animation-iteration-count: infinite;
        /* you could also use milliseconds (ms) or something like 2.5s */
        -webkit-animation: colorchange 50s; /* Chrome and Safari */
        -webkit-animation-iteration-count: infinite;
    }

    @keyframes colorchange
    {
        0%   {background: #faf6d6;}
        25%  {background: #cdffdf;}
        50%  {background: #ebe4ff;}
        75%  {background: #f1cfcf;}
        100% {background: #faf6d6;}
    }

    @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
    {
        0%   {background: #faf6d6;}
        25%  {background: #cdffdf;}
        50%  {background: #ebe4ff;}
        75%  {background: #f1cfcf;}
        100% {background: #faf6d6;}
    }
</style>
