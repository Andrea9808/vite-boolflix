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
            <div v-for="card in store.movies" :key="card" class="col-6 col-md-4 col-lg-3">
                <MovieCard :info="card"/>
            </div>
        </div>
    </div>
</template>

<style>
</style>