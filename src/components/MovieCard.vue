<script>
export default {
    name: "MovieCard",

    props: {
        info: Object
    },

    data(){
        return {
            bandiere: {
                en: 'https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1ec-1f1e7.png',
                es: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/300px-Bandera_de_Espa%C3%B1a.svg.png',
                it: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/383px-Flag_of_Italy.svg.png',
                fr: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/383px-Flag_of_France.svg.png',
                pt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/188px-Flag_of_Portugal.svg.png'
            }
               
        }
    }

 

}
</script>

<template>
    <div class="card">
        <h6>Titolo: {{ info.title }}</h6>
        <h6>Titolo originale: {{ info.original_title }}</h6>

        <!-- inserisco l'operatore || in modo tale che fornisca un valore predefinito nel caso ci fosse un'undefined, 
        se la lingua non è presente nell'oggetto bandiere, viene utilizzato il link predefinito all'immagine della bandiera arcobaleno -->
        <img  :src="bandiere[info.original_language.toLowerCase()] || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Classic_Rainbow_Flag.png/375px-Classic_Rainbow_Flag.png'">
        <h6>voto: {{ info.vote_average }}</h6>
    </div>
</template>

<style lang="scss">
    .card{
        min-height: 150px;
        margin-top: 15px;

        img{
            width: 30px;
            height: 20px;
        }
    }
</style>