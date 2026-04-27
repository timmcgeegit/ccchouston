// Stubbed for design-review only. Original site used Supabase for data and auth.
// This stub returns empty results so any lingering imports don't crash the dev server.

const noopQuery = {
  select: () => noopQuery,
  eq: () => noopQuery,
  order: () => noopQuery,
  insert: () => Promise.resolve({ data: null, error: null }),
  update: () => Promise.resolve({ data: null, error: null }),
  delete: () => Promise.resolve({ data: null, error: null }),
  then: (resolve) => resolve({ data: [], error: null }),
};

export const supabase = {
  from: () => noopQuery,
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: null, error: new Error('auth disabled') }),
    signOut: async () => ({ error: null }),
    session: () => null,
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
};
