<template>
    <v-container>
        <div class="headline font-weight-light">
            <p>
                <b>Иван Петрович</b>, Да вы молодец!
            </p>
        </div>
        <v-row

        >
            <v-col
                    v-for="n in 6"
                    :key="n"
                    :cols="12"
                    :xl="4"
                    :lg="4"
                    :md="4"
                    :sm="6"
                    align="center"
                    justify="center"
            >
                <v-card
                        :color="color_list[n-1]"
                        class="mx-auto"
                >
                    <v-card-text>
                        <div class="headline">Иван Петрович</div>
                        <p class="text--primary">
                            1094 очков | 12.42 секунды на ответ!
                        </p>
                        <p>Не плохо, но могло быть лучше</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-btn
                class="mt-2"
                dark
                v-on:click="nextPage"
        >
            Далее!
        </v-btn>
    </v-container>
</template>
<script>

	import router from "../router/router";

	export default {
		methods: {
			nextPage() {
				router.push({name: 'player_game_result'})
			},
		},
		data: () => ({
			color_list: [
				'#3aee66',
				'#b2ffc1',
				'#d6fa89',
				'#ffe396',
				'#ffa66a',
				'#fa6754',
			],
		}),
	}
</script>
