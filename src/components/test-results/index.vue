<template>
  <div>
    <div class="pa-4 headline font-weight-bold">Results of Article 1</div>
    <v-data-table
      :headers="headers"
      :items="data"
      hide-default-footer
      :sort-by="['signedup_precent']"
      :sort-desc="[true]"
      v-if="data.length"
    >
    </v-data-table>
    <div v-if="error" class="text-center pa-16 mt-16">
      <span class="display-1">Something went wrong.</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'test-results-page-component',
    data() {
      return {
        headers: [
          {text: 'Variant Name', align: 'start', sortable: false, value: 'variant_name'},
          {text: 'Total variant views', align: 'center', value: 'page_views'},
          {text: 'Visitors Count', align: 'center', value: 'visitor_count'},
          {text: 'Signedup Count', align: 'center', value: 'signedup_count'},
          {text: 'Singedup Percentage', align: 'center', value: 'signedup_precent'},
        ],
        data: [],
        error: false,
      };
    },
    methods: {
      getArticleResults() {
        this.$api.testResults.articleTestResults(1)
          .then((response) => {
            this.data = response.data;
            this.data.forEach((item, index) => {
              let percent = (item.signedup_count/item.visitor_count * 100);
              percent = (isNaN(percent) || percent == 0) ? 0 : percent.toFixed(2) + " %";
              this.$set(this.data[index], 'signedup_precent', percent);
            });
          })
          .catch(() => this.error = true);
      },
      calculatePercent(item) {
        let percent = (item.signedup_count/item.visitor_count * 100).toFixed(2);
        percent = isNaN(percent) ? 0 : percent + " %";
        return percent;
      },
    },
    mounted() {
      this.getArticleResults();
    },
  };
</script>