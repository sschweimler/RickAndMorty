<template>
  <v-container>
    <searchbar
      v-on:characterSelect="(character) => (selectedCharacter = character)"
    />
    <character :character="selectedCharacter" />
  </v-container>
</template>
<script>
import Character from './Character.vue';
import Searchbar from "./Searchbar";
export default {
  name: "home-page",
  data: () => ({
    selectedCharacter: null,
  }),
  components: {
    Searchbar,
    Character,
  },
};
</script>