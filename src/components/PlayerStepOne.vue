<template>
    <v-container>
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
                        <v-toolbar-title>Введите КОД комнаты</v-toolbar-title>
                        <v-spacer/>
                    </v-toolbar>
                    <v-card-text>
                        <v-row
                                no-gutters
                        >
                            <v-col
                                    cols="12"
                                    sm="8"
                                    class="text-center md6 pa-4"
                            >
                                <v-text-field
                                        color="success"
                                        loading
                                        placeholder="КОД КОМНАТЫ"
                                        @input="updateCode"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="4"
                                    class="text-center md6 pa-4"
                            >
                                <v-btn to="/" large color="primary">Назад</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
	import {mapActions, mapGetters} from 'vuex'
	import router from "../router/router";

	export default {
		computed: {
			...mapGetters({
				isCodeSuccess: 'player/isCodeExists',
			}),
		},
		watch: {
			isCodeSuccess() {
				router.push({name: 'player_lobby'})
			}
		},
		methods: {
			...mapActions({
				updateCode: 'player/updateCode'
			})
		},
		data: () => ({}),
	}
</script>
