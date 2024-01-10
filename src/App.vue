<script>

// importo store
import { store, getMovies } from './store';

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

    created() {
        getMovies();
    } 
}
</script>

<template>
    <HeaderApp />
    <main>
        <MainApp />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
