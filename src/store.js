import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=c3280ae43f7426b4d6f4e11f8b17d87c&language=it-IT",
    movies:[],

    apiUrlSeries:"https://api.themoviedb.org/3/search/tv?api_key=c3280ae43f7426b4d6f4e11f8b17d87c&language=it-IT",
    series:[],

    apiGenre:"https://api.themoviedb.org/3/genre/movie/list?api_key=c3280ae43f7426b4d6f4e11f8b17d87c&language=it-IT",
    genre:[],

    searchText: "",
    selectedGenre: "",
})

