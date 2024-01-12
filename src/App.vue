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

        // CHIAMATA AI FILM
        getMovies() {

            let myUrl = store.apiUrl;

            if (store.selectedGenre !== "") {
                myUrl += `&with_genres=${store.selectedGenre}`;
            }

            console.log("genere selezionato:", store.selectedGenre);

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

            // richiamo le serie nella chiamata movies
            this.getSeries();
            store.searchText = '';
        },

        // CHIAMATA ALLE SERIE
        getSeries() {

            let myUrlSeries = store.apiUrlSeries;

            //se l'utente fa una ricerca
            if (store.searchText !== "") {
                myUrlSeries += `&query=${store.searchText}`
            }


            console.log("myUrlSeries:", myUrlSeries);

            axios
                .get(myUrlSeries)
                .then((res => {
                    console.log(res.data.results);
                    store.series = res.data.results
                }))
                .catch((err) => {
                    console.log("errori", err);
                })

        },

        getGenre() {
            axios
                .get(store.apiGenre)
                .then((res => {
                    console.log(res.data.genres);
                    store.genre = res.data.genres;
                }))
                .catch((err) => {
                    console.log("errori", err);
                })
        }
    },

    created() {
        this.getMovies();
        this.getGenre();
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
