<template>
    <v-container >
        <v-card class="mb-4">
            <v-card-title>Вопрос №1</v-card-title>
            <v-card-text>
                <p>gda gdasasdg</p>
                <p>gda gdasasdggdas gasdgsa dg</p>
                <p>gda gdasasdggdas gasdgsa dggfdag adg</p>
                <p>gda gdag gasdgsa dggfdag adgdsag g</p>
            </v-card-text>
        </v-card>

        <v-row
                v-for="n in 2"
                :key="n"
        >
            <v-col
                    align="center"
                    justify="center"
            >
                <div class="text-button-item pb-6 pt-6 elevation-4">
                    13245 gsa dgsadhgasdh asfh safhasf hasfhsafh
                </div>
            </v-col>
            <v-col
                    justify="center"
                    align="center"
            >
                <div class="text-button-item pb-6 pt-6 elevation-4">
                    13245 gsa dgsadhgasdh asfh safhasf hasfhsafh
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
	import {mapActions} from 'vuex'

	export default {
		methods: {
			...mapActions({
				updateCode: 'player/updateCode'
			})
		},
		data: () => ({}),
	}
</script>
<style>
    .text-button-item {
        background: #D4F6FF;
        border-radius: 2px;
        cursor: pointer;
    }
    .text-button-item:hover {
        background: #92F0FA;
        border-radius: 2px;
    }
</style>
