<template>
  <v-container fluid>
    <div class="full-width">
      <div class="d-inline-block grey--text text--lighten-1">
        <div>
          <v-btn icon x-large class="grey--text text--lighten-1">
            <v-icon>mdi-server-off</v-icon>
          </v-btn>
        </div>
        <div>
          <p class="display-1">Something went wrong</p>
          <p class="display-1">Internal Server Error</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'error-component',
  };
</script>

<style scoped>
  .full-width {
    width: 100%;
    text-align: center;
  }
</style>