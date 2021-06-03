<template>
  <div class="text-center pa-16 mt-16">
    <span class="display-1">{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: 'success-signup-component',
    props: {
      message: String,
    },
  };
</script>