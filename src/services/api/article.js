import http from '../axios';

export function getVariantDetails(payload) {
  return http.post('/api/v1/ab_testing/variant_info', payload);
}

export function visitorSignup(payload) {
  return http.post('/api/v1/ab_testing/signup_event', payload);
}