<template>
    <v-container
            fluid
    >
        <v-row>
            <v-col
                    align="center"
                    justify="center"
            >
                <div class="headline">
                    <p>Присоеденилось 5 игроков</p>
                    <p>Когда все участники будут готовы, вы можете начать игру</p>
                </div>

                <v-btn
                        v-on:mousedown="readyToStart"
                        v-on:mouseup="notReadyToStart"
                        v-on:mouseleave="notReadyToStart"
                        min-height="120"
                        min-width="120"
                        class="ma-2"
                        fab
                        dark
                        x-large
                        color="rgb(14, 167, 0)"
                >
                    <v-icon x-large dark>mdi-gamepad-square</v-icon>
                </v-btn>
                <div class="display-4">
                    <span
                            v-for="n in 5"
                            :key="n"
                    >
                        <v-icon v-if="n+timer <= 5" x-large color="orange">mdi-lightbulb-on</v-icon>
                        <v-icon v-if="n+timer > 5" x-large color="grey">mdi-lightbulb-outline</v-icon>
                    </span>
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

