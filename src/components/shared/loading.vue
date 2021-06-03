<template>
  <div class="text-center pa-16 mt-16">
    <v-progress-circular
        :size="100"
        :width="7"
        color="deep-purple accent-4"
        indeterminate
      ></v-progress-circular>
  </div>
</template>

<script>
  export default {
    name: 'loading-component',
  };
</script>