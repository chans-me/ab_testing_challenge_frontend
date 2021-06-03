<template>
  <v-app>
    <v-main>
      <div>
        <v-app-bar
          color="deep-purple accent-4"
          dense
          dark
        >
          <v-toolbar-title>{{$root.currentPage.pageTitle}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            left
            bottom
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-show="$root.currentPage.component == 'test-results'"
                @click="$root.currentPage = {component: 'article-page', pageTitle: 'Article'}"
              >
                <v-list-item-title>Article Page</v-list-item-title>
              </v-list-item>
              <v-list-item
                v-show="$root.currentPage.component == 'article-page'"
                @click="$root.currentPage = {component: 'test-results', pageTitle: 'A/B Test Results'}"
              >
                <v-list-item-title>A/B Test Results</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
        <component :is="$root.currentPage.component" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      'article-page': () => import(/* webpackChunkName: "Article-Page" */ '@/components/article-page'),
      'test-results': () => import(/* webpackChunkName: "Test-Results" */ '@/components/test-results'),
    },
  };
</script>
