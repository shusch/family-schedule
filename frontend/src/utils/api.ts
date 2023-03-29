export const api = {
  get: async (path: string) => {
    const res = await fetch(process.env.API_BASEURL + path);
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  },

  post: async <T>(path: string, headers: HeadersInit, body: T) => {
    const res = await fetch(process.env.API_BASEURL + path, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  },
};
