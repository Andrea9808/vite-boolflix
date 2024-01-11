<script>

// importo store
import { store } from '../store';

export default {

    name: "HeaderApp",

    data() {
        return {
            store,
        }
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
                    <input type="text" placeholder="Inserisci il film o la serie che vuoi vedere" v-model.trim="store.searchText" @keyup.enter="$emit('search')" >
                    <button @click.prevent="$emit('search')">INIZIA</button>
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