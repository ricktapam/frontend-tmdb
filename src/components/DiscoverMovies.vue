<template>
  <h1 class="text-white text-3xl mt-5">Discover</h1>

  <div class="md:flex">
    <div class="bg-neutral p-5 rounded-xl max-w-full mt-5 md:mr-4 text-white max-h-[65vh]">
      <h2 class="text-2xl text-center font-semibold">Filter</h2>

      <div class="dui-divider my-0"></div>

      <h3 class="text-lg text-center">Rating</h3>
      <p>Min: {{minRating}}</p>
      <input type="range" min="0" max="10" v-model="minRating" class="min-w-full">
      <p>Max: {{maxRating}}</p>
      <input type="range" min="0" max="10" v-model="maxRating" class="min-w-full">

      <div class="dui-divider my-0"></div>

      <h3 class="text-lg text-center">Release year</h3>
      <p>Min: {{minRelease}}</p>
      <input type="range" min="1910" max="2022" v-model="minRelease" class="min-w-full">
      <p>Max: {{maxRelease}}</p>
      <input type="range" min="1910" max="2022" v-model="maxRelease" class="min-w-full">

      <div class="dui-divider my-0"></div>

      <button class="dui-btn dui-btn-primary max-w-[95%] mt-4" v-on:click="FilterMovies">Filter</button>
    </div>
  

<div v-if="!filter">
  <div class="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-4 mt-5">
    <div
      v-for="movie in movies"
      v-bind:key="movie.id"
      class="dui-card dui-card-compact mb-10 bg-base-300 shadow-gray-800 shadow-lg"
    >
      <router-link :to="`/movie/${movie.id}`"
              ><figure><img v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" /></figure></router-link>
      <div class="dui-card-body">
        <router-link :to="`/movie/${movie.id}`"
              ><h2 class="dui-card-title">{{ movie.original_title }}</h2></router-link>
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
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 mt-5">
        <div
          v-for="filteredmovie in filteredMovies"
          v-bind:key="filteredmovie.id"
          class="dui-card dui-card-compact mb-10 bg-base-300 shadow-gray-800 shadow-lg"
        >
          <router-link :to="`/movie/${filteredmovie.id}`"
              ><figure>
            <img v-bind:src="`https://image.tmdb.org/t/p/w500${filteredmovie.poster_path}`" />
          </figure></router-link>
          <div class="dui-card-body">
            <router-link :to="`/movie/${filteredmovie.id}`"
              ><h2 class="dui-card-title">{{ filteredmovie.original_title }}</h2></router-link>
            <p class="md:hidden"></p>
            <p class="hidden md:block">{{ filteredmovie.overview.substring(0, 150) }}...</p>
            <div class="dui-card-actions justify-end">
              <router-link :to="`/movie/${filteredmovie.id}`"
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
  name: "DiscoverMovies",

  data() {
    return {
      movies: [],
      filteredMovies: [],
      filter: false,
      minRating: 0,
      maxRating: 10,
      minRelease: 1910,
      maxRelease: 2022,
    };
  },

  methods: {
    async getData() {
      try {
        const data = await moviedb.discoverMovie();
        this.movies = data.results;
        //console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    },
    FilterMovies() {
      this.filteredMovies = [];
      for(var i=0; i<this.movies.length; i++){
        if(this.movies[i].vote_average <= this.maxRating && this.movies[i].vote_average >= this.minRating
        && this.movies[i].release_date.slice(0,4) <= this.maxRelease && this.movies[i].release_date.slice(0,4) >= this.minRelease){
          this.filteredMovies.push(this.movies[i]);
          console.log(this.movies[i])
        }
      }
      this.filter = true;
    },
  },
  created() {
    this.getData();
  },
};
</script>
