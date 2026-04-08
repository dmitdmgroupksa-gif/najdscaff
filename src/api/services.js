import { apiClient } from './apiClient';

export const services = {
  entities: {
    Inquiry: {
      create: (data) => apiClient.post('/inquiries', data),
      list: (sort) => apiClient.get(`/inquiries?sort=${sort}`),
      update: (id, data) => apiClient.put(`/inquiries/${id}`, data),
      delete: (id) => apiClient.delete(`/inquiries/${id}`),
    },
    CatalogueDownload: {
      create: (data) => apiClient.post('/catalogue-downloads', data),
      list: (sort) => apiClient.get(`/catalogue-downloads?sort=${sort}`),
    },
  },
  integrations: {
    Core: {
      SendEmail: (data) => apiClient.post('/email/send', data),
    },
  },
  auth: {
    me: () => apiClient.get('/auth/me'),
    logout: (redirectUrl) => apiClient.post('/auth/logout', { redirectUrl }),
    redirectToLogin: (redirectUrl) => {
      window.location.href = `/login?redirect=${encodeURIComponent(redirectUrl)}`;
    },
  },
  appLogs: {
    logUserInApp: (pageName) => apiClient.post('/logs/user-activity', { pageName }),
  },
};
