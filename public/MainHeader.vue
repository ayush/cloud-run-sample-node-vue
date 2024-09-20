<template>
  <h1 class="title">
    {{ title }}
  </h1>
  <p class="subtitle">
    {{ subtitle }}
  </p>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>
