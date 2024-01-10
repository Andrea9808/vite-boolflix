import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=c3280ae43f7426b4d6f4e11f8b17d87c&language=it-IT",
    movies:[],

    searchText: "",

})

