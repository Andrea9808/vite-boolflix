<script>
// AXIOS
import axios from 'axios';

// importo store
import { store } from './store';

import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';

export default {
    components: {
        HeaderApp,
        MainApp,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        getMovies() {

            let myUrl = store.apiUrl;

            //se l'utente fa una ricerca
            if (store.searchText !== "") {
                myUrl += `&query=${store.searchText}`
            }

            console.log("myUrl:", myUrl);
            console.log("store.searchText:", store.searchText);

            axios
                .get(myUrl)
                .then((res => {
                    console.log(res.data.results);
                    store.movies = res.data.results
                }))
                .catch((err) => {
                    console.log("errori", err);
                })
        }
    },

    created() {
        this.getMovies();
    }


}
</script>

<template>
    <HeaderApp @search="getMovies" />
    <main>
        <MainApp />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
