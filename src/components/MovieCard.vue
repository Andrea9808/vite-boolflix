<script>
export default {
    name: "MovieCard",

    props: {
        info: Object
    },

}
</script>

<template>
    <div class="card">
        <h6>Titolo: {{ info.title }}</h6>
        <h6>Titolo originale: {{ info.original_title }}</h6>
        <h6>Lingua: {{ info.original_language }}</h6>
        <h6>voto: {{ info.vote_average }}</h6>
    </div>
</template>

<style>
    .card{
        min-height: 150px;
        margin-top: 15px;
    }
</style>