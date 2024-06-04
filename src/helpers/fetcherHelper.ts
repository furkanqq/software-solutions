interface FetchOptions {
  method?: 'DELETE' | 'POST' | 'GET' | 'PUT';
  headers?: Record<string, string>;
  revalidate?: number;
  body?: any;
}

export const nextFetcher = (url: string, options: FetchOptions = {}) => {
  const { revalidate = 6000, method = 'GET', headers = {}, body } = options;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${'JowDg7K9IcfWuS_KsfzGnUynDi45iOAs'}`,
      'Content-Type': 'application/json',
      ...headers
    },
    body: method !== 'GET' ? JSON.stringify(body) : undefined,
    next: {
      revalidate
    },
    method
  }).then((res) => res.json());
};
