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
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h4 v-if="store.movies.length > 0">FILM</h4>
            <div v-for="card in store.movies" :key="card" class="col-6 col-md-4 col-lg-3">
                <MovieCard :info="card"/>
            </div>

            <h4 v-if="store.series.length > 0">SERIE TV</h4>
            <div v-for="cardSeries in store.series" :key="cardSeries" class="col-6 col-md-4 col-lg-3">
                <MovieCard :info="cardSeries"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    h4{
        margin-top: 10px;
        color: white;
    }
</style>