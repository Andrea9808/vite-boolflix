<script>
export default {
    name: "MovieCard",

    props: {
        info: Object
    },

    data() {
        return {
            bandiere: {
                en: 'https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1ec-1f1e7.png',
                es: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/300px-Bandera_de_Espa%C3%B1a.svg.png',
                it: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/383px-Flag_of_Italy.svg.png',
                fr: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/383px-Flag_of_France.svg.png',
                pt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/188px-Flag_of_Portugal.svg.png',
                ko: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/420px-Flag_of_South_Korea.svg.png',
            },

            cover: false,

        }

    },

    methods: {
        rotazioneCard() {
            this.cover = !this.cover;
        }
    },

    // Numeri trasformati da 1 a 5
    computed: {
        trasformaNumero() {
            const numeroArrotondato = Math.ceil(this.info.vote_average / 2);
            return Math.max(1, Math.min(5, numeroArrotondato));
        }
    }


}
</script>

<template>

    <!-- implemento la rotazione, se la card è true implementa la classe ruota -->
    <div class="card" :class="{ 'ruota': cover }" @mouseover="rotazioneCard" @mouseout="rotazioneCard">
        <div class="container-poster">
            <img v-if="info.poster_path" class="img-series-movies" :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`" alt="immagine serie/film">
            <img v-else class="not-found" :src="'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'" alt="not found">
        </div>

        <div class="card-info">

            <!-- Overview -->
            <h6>Trama:</h6>
            <p v-if="info.overview">{{info.overview}}</p>
            <p v-else>Al momento non è disponibile nessuna trama</p>

            <!-- nome in italiano -->
            <h6 v-if="info.original_title">Titolo: {{ info.title }}</h6>
            <h6 v-else>Titolo: {{ info.name }}</h6>

            <!-- nome originale -->
            <h6 v-if="info.original_title">Titolo originale: {{ info.original_title }}</h6>
            <h6 v-else>Titolo originale: {{ info.original_name }}</h6>

            <!-- inserisco l'operatore || in modo tale che fornisca un valore predefinito nel caso ci fosse un'undefined, 
            se la lingua non è presente nell'oggetto bandiere, viene utilizzato il link predefinito all'immagine della bandiera arcobaleno -->
            <h6>Lingua originale: 
                <img class="flag" :src="bandiere[info.original_language.toLowerCase()] || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Classic_Rainbow_Flag.png/375px-Classic_Rainbow_Flag.png'">
            </h6>
            <div>
                <h6>Voto:</h6>
                <i v-for="n in trasformaNumero" :key="n" class="fa-solid fa-star"></i>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.card {
    margin-top: 15px;
    transition: transform 0.5s, opacity 0.5s;
    transform-style: preserve-3d;

    // Il tuo stile esistente rimane invariato

    &.ruota {
        transform: rotateY(180deg);
        background-color: black;
    }

    .flag {
        width: 30px;
        height: 20px;
    }

    .img-series-movies {
        width: 100%;
        min-height: 500px;
        border-radius: 5px;
    }

    .container-poster {
        height: 100%;
    }

    .not-found {
        width: 100%;
        height: 500px;
        border-radius: 5px;
    }

    .card-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotateY(180deg);
        background-color: black;
        opacity: 0;
        transition: opacity 0.5s;
        border-radius: 5px;
        color: white;
        padding: 10px;
        text-align: center;
    }

    &.ruota .card-info {
        opacity: 1;
    }

    p{
        font-size: 10px;
    }

    .fa-star{
        color: red;
    }
}
</style>