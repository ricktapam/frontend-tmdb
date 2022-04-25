<template>
  <div class="max-w-[95%] mx-auto md:max-w-full">
    <h1 class="text-white text-3xl mt-5">Showing results for: {{this.$route.params.query}}</h1>

    <div class="flex">
    <div class="bg-neutral p-5 rounded-xl max-w-xs mt-5 mr-4 text-white">
      <h2 class="text-2xl text-center font-semibold">Filter</h2>

      <div class="dui-divider my-0"></div>

      <h3 class="text-lg text-center">Rating</h3>
      <p>Min: {{minRating}}</p>
      <input type="range" min="1" max="10" v-model="minRating" class="min-w-full">
      <p>Max: {{maxRating}}</p>
      <input type="range" min="1" max="10" v-model="maxRating" class="min-w-full">

      <div class="dui-divider my-0"></div>

      <h3 class="text-lg text-center">Release year</h3>
      <p>Min: {{minRelease}}</p>
      <input type="range" min="1910" max="2022" v-model="minRelease" class="min-w-full">
      <p>Max: {{maxRelease}}</p>
      <input type="range" min="1910" max="2022" v-model="maxRelease" class="min-w-full">
    </div>


    <div>
      <div class="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-5">
        <div
          v-for="movie in movies.slice(0, 20)"
          v-bind:key="movie.id"
          class="dui-card dui-card-compact mb-10 bg-base-300 shadow-gray-800 shadow-lg"
        >
          <figure>
            <img v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
          </figure>
          <div class="dui-card-body">
            <h2 class="dui-card-title">{{ movie.original_title }}</h2>
            <p class="md:hidden"></p>
            <p class="hidden md:block">{{ movie.overview.substring(0, 175) }}...</p>
            <div class="dui-card-actions justify-end">
              <router-link :to="`/movie/${movie.id}`"
                ><button class="dui-btn dui-btn-primary max-w-[95%]">Details</button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
const { MovieDb } = require("moviedb-promise");
const moviedb = new MovieDb(process.env.VUE_APP_MOVIE_DB_KEY);

export default {
  name: "SearchResults",

  data() {
    return {
      movies: [],
      searchQuery: "",
      minRating: 5,
      maxRating: 10,
      minRelease: 1910,
      maxRelease: 2022,
    };
  },

  components: {},

  methods: {
    async SearchMovies() {
      try {
        this.searchQuery = this.$route.params.query;
        const data = await moviedb.searchMovie({ query: this.$route.params.query });
        this.movies = data.results;
        console.log(data);
        this.$forceUpdate();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.SearchMovies();
  },
};
</script>
