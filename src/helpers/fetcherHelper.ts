export const nextFetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${'JowDg7K9IcfWuS_KsfzGnUynDi45iOAs'}`
    },
    next: {
      revalidate: 6000
    }
  }).then((res) => res.json());
