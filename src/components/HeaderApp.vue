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
    <div class="container-fluid bg-black">
        <div class="row">
            <div class="intro">
                <div class="logo">
                    <h3>BollFlix</h3>
                </div>

                <div>
                    <select name="selezione genere" v-model="store.searchText">
                        <option value="">Seleziona genere</option>
                        <option v-for="genere in store.genre" :key="genere.id" :value="genere.id">{{ genere.name }}</option>
                    </select>
                    <input type="text" placeholder="Cerca il tuo film/serie" v-model.trim="store.searchText"
                        @keyup.enter="$emit('search')">
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

        h3 {
            font-size: 50px;
        }
    }

    button {
        color: white;
        background-color: red;
        margin-left: 10px;
        padding: 8px 15px;
    }

    input {
        padding: 8px;
    }
}
</style>