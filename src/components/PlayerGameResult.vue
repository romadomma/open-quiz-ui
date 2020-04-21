<template>
    <v-container>
        <v-row>
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
                        <div>Иван Петрович</div>
                        <p class="display-1 text--primary">
                            Набрал 1094 очков
                        </p>
                        <p>Не плохо, но могло быть лучше</p>
                        <div class="text--primary">
                            <div>Среднее время ответа: 12 секунд</div>
                            <div>Отвечено правильно: 23</div>
                            <div>Отвечено не правильно: 12</div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

	export default {
		methods: {},
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
