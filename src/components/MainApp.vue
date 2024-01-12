<script>
import MovieCard from './MovieCard.vue';

// importo store
import { store } from '../store';

export default{

    name: "MainApp",

    components:{
        MovieCard,
    },

    data() {
        return {
            store,
        }
    },

    computed: {
        filteredMovies() {
            if (store.selectedGenre === "") {
                // se nessun genere è selezionato, restituisco tutti i film
                return store.movies;

            } else {
                // filtro i film in base al genere selezionato
                return store.movies.filter((movie) => {

                    // trasformo la stringa in numero
                    return (
                        movie.genre_ids &&
                        movie.genre_ids.includes(parseInt(store.selectedGenre))
                    );
                });
            }
        },


        filteredSeries() {
        if (store.selectedGenre === "") {
            // se nessun genere è selezionato, restituisco tutti i film
            return store.series;

        } else {
            // filtro i film in base al genere selezionato
            return store.series.filter((serie) => {

                // trasformo la stringa in numero
                return (
                    serie.genre_ids &&
                    serie.genre_ids.includes(parseInt(store.selectedGenre))
                );
            });
        }
    },
    
    },

    
}
</script>

<template>
    <div class="container">
       
        <h1 v-if="store.movies.length === 0 && store.series.length === 0">Film, serie TV e tanto altro, senza limiti. Inizia la tua ricerca.</h1>
        <div class="row">
            

             <!-- FILM -->
            <h4 v-if="store.movies.length > 0">Scorri sulle card dei film per saperne di più</h4>
            <h4 v-if="store.movies.length > 0">FILM</h4>
            <div v-for="card in filteredMovies" :key="card" class="col-6 col-md-4 col-lg-3">
                <MovieCard :info="card"/>
            </div>

            <!-- SERIE -->
            <h4 v-if="store.series.length > 0">Scorri sulle card delle serie TV per saperne di più</h4>
            <h4 v-if="store.series.length > 0">SERIE TV</h4>
            <div v-for="cardSeries in filteredSeries" :key="cardSeries" class="col-6 col-md-4 col-lg-3">
                <MovieCard :info="cardSeries"/>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>


    h1{
        color: white;
       text-align: center;
       margin-top: 30px;
    }

    h4{
        margin-top: 10px;
        color: white;
    }
</style>