import { BASE_URL, TMDB_TOKEN } from '../constants/urls'

const requests = {
	fetchTrending: `${BASE_URL}/trending/all/week?api_key=${TMDB_TOKEN}&language=en-US`,
	fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${TMDB_TOKEN}&with_networks=213`,
	fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${TMDB_TOKEN}&language=en-US`,
	fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_TOKEN}&language=en-US&with_genres=28`,
	fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_TOKEN}&language=en-US&with_genres=35`,
	fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_TOKEN}&language=en-US&with_genres=27`,
	fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_TOKEN}&language=en-US&with_genres=10749`,
	fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${TMDB_TOKEN}&language=en-US&with_genres=99`
}

export default requests
