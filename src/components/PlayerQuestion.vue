<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row>
            <v-col
                    v-for="n in 4"
                    :key="n"
                    cols="6"
                    align="center"
                    justify="center"
                    @click="checkAnswer"
            >
                <div class="text-button-item pb-12 pt-12 elevation-4">
                    Вопросы на телевизоре, или другом устройстве
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
				router.push({name: 'player_question_result'})
			}
		},
		data: () => ({}),
	}
</script>

