<template>
    <v-container
        class="fill-height"
        fluid
    >
        <v-row>
            <v-col
                align="center"
                justify="center"
            >
                <div>
                    <p>Ваш код комнаты</p>
                    <p class="display-4">АА8274</p>
                    <p>Присоеденилось 4/6 игроков</p>
                    <p>Петрович</p>
                    <p>Василич</p>
                    <p>Кадыков</p>
                    <p>Ненашев</p>
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
			readyToStart() {
				this.isVisible = true;
				this.to_start_date = setInterval(() => {
					this.timer -= 1;
					if (this.timer <= 0) {
						router.push({name: 'player_category'});
						clearInterval(this.to_start_date);
					}
				}, 500);
			},
			notReadyToStart() {
				this.isVisible = false;
				this.timer = 5;
				clearInterval(this.to_start_date);
			},
		},
		data: () => ({
			isVisible: false,
			timer: 5,
			to_start_date: null,
		}),
	}
</script>
