<template>
  <ul class="result-list">
    <li class="list-item" v-for="result in results" :key="result.id">
        <div class="list-item--image">
            <img :src="`https://rickandmortyapi.com/api/character/avatar/${result.id}.jpeg`" width="50px" height="50px">
        </div>
        <div class="list-item--text">
            {{result.name}}
        </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "search-results",
  props: {
    results: Array,
  },
};
</script>
<style scoped>
.result-list {
    max-height: 500px;
    overflow-y: scroll;
    list-style-type: none;
    padding-left: 0;
}
.list-item {
    display: flex;
    cursor: pointer;
    padding: 5px
}

.list-item:hover {
    background-color: #ddd;
}

.list-item--image {
    display: flex;
    justify-items: center;
}

.list-item--text {
    padding-left: 10px;
}
</style>