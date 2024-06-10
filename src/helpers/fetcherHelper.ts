interface FetchOptions {
  method?: 'DELETE' | 'POST' | 'GET' | 'PUT';
  body?: Record<string, any> | FormData;
  headers?: Record<string, string>;
  revalidate?: number;
}

export const nextFetcher = async (
  url: string,
  options: FetchOptions = {}
): Promise<any> => {
  const { method = 'GET', headers = {}, body } = options;
  const commonHeaders: Record<string, string> = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    ...headers
  };

  const fetchOptions: RequestInit = {
    headers: commonHeaders,
    method
  };

  if (method !== 'GET') {
    if (body instanceof FormData) {
      fetchOptions.body = body;
    } else {
      fetchOptions.body = JSON.stringify(body);
      fetchOptions.headers = {
        ...commonHeaders,
        'Content-Type': 'application/json'
      };
    }
  }

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Fetch error data:', errorData);
      throw new Error(
        `Fetch error: ${response.status} - ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error('Error in nextFetcher:', error);
    throw error;
  }
};
