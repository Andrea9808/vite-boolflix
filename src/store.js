import { reactive } from 'vue'

// AXIOS
import axios from 'axios';


export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/discover/movie?api_key=c3280ae43f7426b4d6f4e11f8b17d87c&language=it-IT",
    movies: [],

    searchText: "",

})

export const getMovies = function () {


    let myUrl = store.apiUrl;

    //se l'utente fa una ricerca
    if (store.searchText !== "") {
        myUrl += `?title=${store.searchText}`

    }


    axios
        .get(myUrl)
        .then((res => {
            console.log(res.data.results);
            store.movies = res.data.results
        }))
        .catch((err) => {
            console.log("errori", err);
        })
}


