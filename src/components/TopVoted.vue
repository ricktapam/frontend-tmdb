<template>
  <h1 class="text-white text-3xl mt-5">Top Voted</h1>
  <div v-if="showLessMovies">
    <div class="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-5">
      <div
        v-for="movie in movies.slice(0, 5)"
        v-bind:key="movie.id"
        class="dui-card dui-card-compact mb-10 bg-base-300 shadow-gray-800 shadow-lg"
      >
        <router-link :to="`/movie/${movie.id}`"
              ><figure><img v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" /></figure></router-link>
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
  <div v-else>
    <div class="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-5">
      <div
        v-for="movie in movies"
        v-bind:key="movie.id"
        class="dui-card dui-card-compact mb-10 bg-base-300 shadow-gray-800 shadow-lg"
      >
        <router-link :to="`/movie/${movie.id}`"
              ><figure><img v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" /></figure></router-link>
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

  <button class="dui-btn dui-btn-primary" v-on:click="showMoreLess(this)">{{buttonText}}</button>

  <div class="dui-divider"></div>
</template>

<script>
const { MovieDb } = require("moviedb-promise");
const moviedb = new MovieDb(process.env.VUE_APP_MOVIE_DB_KEY);

export default {
  name: "TopVoted",

  data() {
    return {
      movies: [],
      showLessMovies: true,
      buttonText: "Show More",
    };
  },

  methods: {
    async getData() {
      try {
        const data = await moviedb.movieTopRated();
        this.movies = data.results;
        //console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    },

    showMoreLess() {
      if (this.showLessMovies === true) {
        this.buttonText = "Show Less";
        this.showLessMovies = false;
      } else {
        this.buttonText = "Show More";
        this.showLessMovies = true;
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
