<template>
  <hr>
  <h2 class="example">{{ msg }}</h2>
</template>

<script>
export default {
  data() {
    return {
      msg: '<<footer>>',
      color: 'orange',
    }
  }
}
</script>

<style scoped>
.example {
  color: v-bind('color');
}
</style>
