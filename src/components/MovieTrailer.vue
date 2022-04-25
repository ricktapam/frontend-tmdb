<template>
  <div class="max-w-[95%] mx-auto md:max-w-full">
    <div>
        <iframe v-bind:src="`https://www.youtube.com/embed/${singleTrailer}`" frameborder="0" allowfullscreen class="aspect-video min-w-full"></iframe>
    </div>
  </div>
</template>

<script>
const { MovieDb } = require("moviedb-promise");
const moviedb = new MovieDb("17e6273050ea3134a10b4dc39a15bfff");

export default {
  name: "MovieDetail",

  data() {
    return {
        trailer: [],
        video: [],
        singleTrailer: [],
        };
  },

  components: {
  },

  methods: {
    async getTrailer() {
      try {
        const data = await moviedb.movieVideos({ id: this.$route.params.id });
        this.trailer = data.results;
        //console.log(this.trailer)
        
        for(var i=0; i<this.trailer.length; i++){
            if(this.trailer[i].type === "Trailer"){
                //console.log(this.trailer[i])
                this.video.push(this.trailer[i].key);
            }
        }
        console.log(this.video);
        this.singleTrailer = this.video[0];

      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getTrailer();
  },
};
</script>
