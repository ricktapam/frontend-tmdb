<template>
  <nav class="p-5 bg-neutral shadow-lg md:flex md:items-center md:justify-between md:rounded-xl">
    <div class="flex justify-between items-center text-white">
      <div class="flex-1">
        <router-link
          to="/"
          class="dui-btn dui-btn-ghost dui-normal-case text-4xl font-['Open Sans'] font-light hover:bg-primary"
          >Movies</router-link
        >
      </div>

      <div class="flex-none md:hidden">
        <button class="dui-btn dui-btn-square dui-btn-ghost" name="menu" v-on:click="Menu(this)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <ul
      class="md:flex md:items-center z-[1] md:z-auto md:static absolute bg-neutral text-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
    >
      <li class="mx-4 my-6 md:my-0">
        <router-link
          to="/"
          class="dui-btn dui-btn-ghost dui-normal-case text-xl hover:bg-primary duration-100 font-['Open Sans'] font-light"
          >Home</router-link
        >
      </li>
      <li class="mx-4 my-6 md:my-0">
        <router-link
          to="/discover"
          class="dui-btn dui-btn-ghost dui-normal-case text-xl hover:bg-primary duration-100 font-['Open Sans'] font-light"
          >Discover</router-link
        >
      </li>

      <div class="dui-form-control">
        <div class="dui-input-group">
          <input
            type="text"
            placeholder="Search…"
            class="dui-input dui-input-bordered min-w-[80%]"
            v-model="searchInput"
            @keyup.enter="onSubmit"
          />
          <button class="dui-btn dui-btn-square bg-primary hover:bg-primary-focus" type="submit" v-on:click="onSubmit({searchInput})">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </ul>
  </nav>
</template>

<script>
let start = "menu";

export default {
  data() {
    return {
      searchInput: "",
    };
  },

  methods: {
    Menu() {
      let list = document.querySelector("ul");
      if (start === "menu") {
        (start = "close"), list.classList.add("top-[80px]"), list.classList.add("opacity-100");
      } else {
        (start = "menu"), list.classList.remove("top-[80px]"), list.classList.add("opacity-0");
      }
      //e.name === "menu"
      //? ((e.name = "close"), list.classList.add("top-[80px]"), list.classList.add("opacity-100"))
      //: ((e.name = "menu"), list.classList.remove("top-[80px]"), list.classList.add("opacity-0"));
    },
    onSubmit(){
      this.searchInput = this.searchInput.replace(/\s+/g, '-');
      this.$router.push("/search/" + this.searchInput);
    }
  },
  name: "NavBar",
};
</script>
