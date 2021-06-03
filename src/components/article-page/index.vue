<template>
  <div>
    <component :is="currentVariant" @signup="signupEvent" :message="message" />
  </div>
</template>

<script>
  import Loading from '@/components/shared/loading';
  import Error from '@/components/shared/error';
  import getBrowserFingerprint from '../../utilities/fingerprint';

  export default {
    name: 'article-page-component',
    components: {
      'first_variant': () => import(/* webpackChunkName: "Article-First-Variant" */ './variants/first-variant'),
      'second_variant': () => import(/* webpackChunkName: "Article-Second-Variant" */ './variants/second-variant'),
      'third_variant': () => import(/* webpackChunkName: "Article-Third-Variant" */ './variants/third-variant'),
      'success_signup': () => import(/* webpackChunkName: "success-signup" */ './variants/success-signup'),
      Loading,
      Error,
    },
    data() {
      return {
        currentVariant: 'loading',
        visitorId: null,
        message: '',
      };
    },
    methods: {
      async getVarint() {
        const visitorAddress = await getBrowserFingerprint();
        this.$api.article.getVariantDetails({'visitor_address': visitorAddress, 'article_id': 1})
          .then(response => {
            if (response && response.variant_name) {
              this.currentVariant = response.variant_name;
              this.visitorId = response.visitor_id;
            } else {
              this.currentVariant = 'error';
            }
          })
          .catch(() => this.currentVariant = 'error');
      },
      signupEvent() {
        this.currentVariant = 'loading';
        this.$api.article.visitorSignup({'visitor_id': this.visitorId, 'article_id': 1})
          .then(response => {
            if (response.status) {
              this.currentVariant = 'success_signup';
              this.message = response.response_message;
            } else {
              this.currentVariant = 'error';
            }
          })
          .catch(() => this.currentVariant = 'error');
      },
    },
    mounted() {
      this.getVarint();
    },
  };
</script>