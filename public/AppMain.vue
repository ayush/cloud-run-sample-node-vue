<template>
  <section class="section">
    <div class="container">
      <!-- Example showing passing properties -->
      <main-header title="Sample App" subtitle="customize it as you like"/>

      <!-- Example showing a component that can call an API -->
      <main-body></main-body>

      <!-- Another example component-->
      <main-footer></main-footer>
    </div>
  </section>
</template>

<script>
import mainHeader from "./MainHeader.vue";
import mainFooter from "./MainFooter.vue";
import mainBody from "./MainBody.vue";

export default {
  components: {mainBody, mainFooter, mainHeader},
}
</script>

<style scoped>
</style>
