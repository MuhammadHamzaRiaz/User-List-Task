<template>
  <div class="text-center !max-w-sm pt-5">
    <h1 class="text-2xl">
      User Todo List
    </h1>
    <div>
      <v-text-field  :rules="rules"></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value => !!value || 'Required.',
    ],
  }),
}
</script>
