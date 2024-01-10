<script>
import SearchApp from './SearchApp.vue';

export default {

    name: "HeaderApp",

    components: {
        SearchApp,
    },

}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="intro">
                <div class="logo">
                    <h3>BollFlix</h3>
                </div>

                <div>
                    <SearchApp @search="getMovies"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;

    .logo {
        color: red;
    }
}
</style>