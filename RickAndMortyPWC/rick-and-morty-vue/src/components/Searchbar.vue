<template>
  <div class="form-container">
    <div class="form">
      <input
        class="search-input"
        type="text"
        placeholder="Search for Rick And Morty Characters"
        autoComplete="on"
        list="suggestions"
        v-model="inputValue"
        @input="(event) => search(event.target.value)"
      />
      <search-results v-if="inputValue.length > 0" :results="results" v-on:characterSelect="characterSelect" />
    </div>
  </div>
</template>
<script>
import SearchResults from "./SearchResults.vue";
export default {
  components: { SearchResults },
  name: "search-bar",
  data: () => ({
    results: [],
    inputValue: ''
  }),
  methods: {
    async search(value) {
      if (value.length > 2) {
        console.log(value);
        const response = await fetch(`/rickandmorty?characters=${value}`);
        const json = await response.json();
        this.results = json;
      }
    },
    characterSelect(character) {
      this.inputValue = '';
      this.$emit('characterSelect', character);
    }
  },
};
</script>
<style scoped>
.search-input {
  box-sizing: border-box;
  /* background-image: url("searchicon.png"); */
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 14px 20px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
  width: 500px;
}

.search-input:focus {
  outline: 3px solid #ddd;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 500px) {
  .search-input {
    width: 100%;
  }

  .form {
    width: 100%;
  }
}
</style>