<template>
  <div class="max-w-[95%] mx-auto md:max-w-full">
    <div>
      <div class="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-5">
        <div
          v-for="movie in movies.slice(0, 5)"
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
</template>

<script>
const { MovieDb } = require("moviedb-promise");
const moviedb = new MovieDb(process.env.VUE_APP_MOVIE_DB_KEY);

export default {
  name: "MovieDetail",

  data() {
    return {
      movies: [],
    };
  },

  components: {},

  methods: {
    async SearchMovies() {
      try {
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
