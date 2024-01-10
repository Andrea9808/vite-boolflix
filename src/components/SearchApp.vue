<script>

// importo store
import { store } from '../store';

export default {
    name: "SearchApp",

    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <input type="text" placeholder="Inserisci il film o la serie che vuoi vedere">
    <button>INIZIA</button>
</template>

<style lang="scss">
</style>