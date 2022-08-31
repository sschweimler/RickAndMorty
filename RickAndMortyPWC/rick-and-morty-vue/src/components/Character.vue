<template>
  <div class="character-container">
    <img v-if="!character" src="@/assets/default.gif" />
    <!-- <v-card v-if="character" class="mx-auto" max-width="500">
      <v-img
        class="white--text align-end"
        contain
        height="200px"
        :src="`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`"
      >
        <v-card-title>{{ character.name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        {{ status(character.status) }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ character.location.name }}</div>
      </v-card-text>
    </v-card> -->

    <v-card v-if="character" class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">{{ status(character.status) }}</div>
          <v-list-item-title class="text-h5 mb-1">
            {{ character.name }}
          </v-list-item-title>
          <v-list-item-subtitle
            >{{ character.location.name }}</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile size="80"><v-img
        class="white--text align-end"
        contain
        height="200px"
        :src="`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`"
      ></v-img></v-list-item-avatar>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "selected-character",
  props: {
    character: Object,
  },
  methods: {
    status(status) {
      switch (status) {
        case 0:
          return "Alive";
        case 1:
          return "Dead";
        case 2:
          return "Unknown";
      }
    },
  },
};
</script>
<style scoped>
.character-container {
  text-align: center;
  margin-top: 10px;
}
</style>