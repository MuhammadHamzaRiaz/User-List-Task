<template>
  <div class="text-center w-80 mx-auto  pt-5">
    <h1 class="text-2xl py-5">
      User Todo List
    </h1>
    <div>
      <v-text-field v-model="userStory" @keydown.enter.prevent="sentStory"></v-text-field>
    </div>
    <div class=" bg-blue-100 p-5 rounded-xl">
      <v-list lines="one" class="!bg-transparent">
        <v-list-item v-for="(item, idx ) in userStories" :key="idx" class="capitalize text-black"
          rounded="shaped">
          <template v-slot:prepend>
            <v-icon icon="mdi-calendar-check-outline"></v-icon>
          </template>
          {{ item.text }}
          <template v-slot:append>
            <v-icon v-if="item.completed" color="secondary" icon="mdi-check-all"
              @click.prevent="flipStory(idx)"></v-icon>
            <v-icon v-else icon="mdi-check" @click.prevent="flipStory(idx)"></v-icon>
            <v-icon icon="mdi-delete" class="text-red-700 !opacity-100" @click="deleteItem(idx)"></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    userStory: "",
  }),
  computed: {
    userStories() {
      return this.$store.getters.userStories;
    }

  },
  methods: {
    sentStory() {
      if (this.userStory) {
        this.$store.dispatch("addStory", { completed: false, text: this.userStory })
        this.userStory = ""
      }
    },
    deleteItem(id) {
      this.$store.dispatch("deleteStory", id);
    },
    flipStory(id) {
      this.$store.dispatch("flipStory", id)
    }

  },
  mounted() {
    this.$store.dispatch("getStories");
  },

}
</script>
