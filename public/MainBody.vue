<template>
  <div class="hello">
    <h1>Say hello to server:</h1>
    <button class="button" @click="fetchData">Click Me!</button>
    <p v-if="serverResponse">{{ serverResponse }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      serverResponse: "",
    };
  },
  methods: {
    fetchData() {
      fetch('/api/hello', {
        method: "GET"
      })
          .then((response) => {
            response.json().then((data) => {
              console.log(data);
              this.serverResponse = data;
            });
          })
          .catch((err) => {
            console.error(err);
          });
    },
  },
};
</script>

<style>
button {
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 8px;
}
</style>