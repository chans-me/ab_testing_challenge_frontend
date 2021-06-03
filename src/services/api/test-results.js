import http from '../axios';

export function articleTestResults(article_id) {
  return http.get(`/api/v1/ab_testing/test_results/${article_id}`);
}