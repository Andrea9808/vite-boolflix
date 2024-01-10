<script>
import MovieCard from './MovieCard.vue';
export default{
    name: "MainApp",

    components:{
        MovieCard,
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-3">
                <MovieCard/>
            </div>
        </div>
    </div>
</template>

<style>
</style>