<script>
// AXIOS
import axios from 'axios';

import HeaderApp from './components/HeaderApp.vue';

export default{
    components: {
        HeaderApp,
    }
}
</script>

<template>
    <HeaderApp/>
</template>

<style lang="scss">
    @use './styles/general.scss';
</style>
