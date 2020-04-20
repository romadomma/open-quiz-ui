<template>
    <v-row
            align="center"
            justify="center"
    >
        <v-col
                cols="12"
                sm="8"
                md="4"
        >
            <v-card class="elevation-12">
                <v-toolbar
                        color="primary"
                        dark
                        flat
                >
                    <v-toolbar-title>Создать игру или подключиться?</v-toolbar-title>
                    <v-spacer/>
                </v-toolbar>
                <v-card-text>
                    <v-row
                            no-gutters
                    >
                        <v-col
                                cols="12"
                                sm="6"
                                class="text-center md6 pa-4"
                        >
                            <v-btn @click="toPlayer()" block x-large color="primary">Я ИГРОК</v-btn>
                        </v-col>
                        <v-col
                                cols="12"
                                sm="6"
                                class="text-center md6 pa-4"
                        >
                            <v-btn @click="addCount()" block x-large color="primary">Я СЕРВЕР</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	import router from "../router/router";

	export default {
		computed: {
			...mapGetters('example', {
				counts: 'getItem'
			})
		},
		methods: {
			toPlayer() {
				router.push({name: 'player_step_one'})
			},
			...mapActions({
				addCount: 'example/addCount'
			})
		},
		data: () => ({}),
	}
</script>
