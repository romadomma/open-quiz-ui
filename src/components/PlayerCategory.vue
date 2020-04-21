<template>
    <v-container
            class="fill-height"
    >
        <v-row
        >
            <v-col
                    cols="12"
                    align="center"
                    justify="center"
            >
                <v-card class="mb-4">
                    <v-card-title>А теперь вам необходимо выбрать категорию вопросов!</v-card-title>
                </v-card>
            </v-col>
            <v-col
                    v-for="n in 4"
                    :key="n"
                    cols="6"
                    align="center"
                    @click="checkAnswer"
            >
                <div class="text-button-item pb-6 pt-6 elevation-4 headline">
                    Фильмы 60
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
	import {mapActions} from 'vuex'
	import router from "../router/router";

	export default {
		methods: {
			...mapActions({
				updateCode: 'player/updateCode'
			}),
			// Todo
			checkAnswer() {
				router.push({name: 'player_question'})
			}
		},
		data: () => ({}),
	}
</script>

